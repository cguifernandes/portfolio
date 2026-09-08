import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { type ReactNode, useEffect } from "react";

const MAX_TILT = 12; // graus
const SPRING = { stiffness: 100, damping: 20, mass: 0.5 };

type Props = {
  children: ReactNode;
  className?: string;
};

// Tilt 3D continuo: acompanha a posicao do mouse na janela inteira, nao so
// quando o cursor esta sobre o card, entao o efeito fica ativo o tempo todo
// que o card estiver na tela. O brilho radial por cima segue o mesmo ponto
// para reforcar a profundidade. Sem mouse (mobile/touch) o card fica parado
// no centro, sem custo.
const TiltCard = ({ children, className }: Props) => {
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const springX = useSpring(px, SPRING);
  const springY = useSpring(py, SPRING);

  useEffect(() => {
    const handleMouseMove = (event: globalThis.MouseEvent) => {
      px.set(event.clientX / window.innerWidth - 0.5);
      py.set(event.clientY / window.innerHeight - 0.5);
    };

    // mouseleave no <html> so dispara quando o cursor sai da janela de
    // verdade (nao borbulha entre elementos internos), entao e o gatilho
    // certo para zerar o tilt quando o mouse sai da viewport
    const handleWindowLeave = () => {
      px.set(0);
      py.set(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleWindowLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleWindowLeave,
      );
    };
  }, [px, py]);

  const rotateX = useTransform(springY, [-0.5, 0.5], [MAX_TILT, -MAX_TILT]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-MAX_TILT, MAX_TILT]);

  const glareX = useTransform(springX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(springY, [-0.5, 0.5], ["0%", "100%"]);
  const glareBackground = useMotionTemplate`radial-gradient(480px circle at ${glareX} ${glareY}, rgba(255, 255, 255, 0.12), transparent 65%)`;

  return (
    <div className={className} style={{ perspective: 1200 }}>
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative"
      >
        {children}

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-xl"
          style={{ background: glareBackground }}
        />
      </motion.div>
    </div>
  );
};

export default TiltCard;
