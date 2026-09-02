import { motion } from "framer-motion";

type Props = {
  text?: string;
  delay?: number;
  className?: string;
  as?: "p" | "span" | "div" | "h1";
};

const BlurText = ({
  text = "",
  delay = 0,
  className = "",
  as: Tag = "p",
}: Props) => {
  return (
    <Tag className={className}>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: -20, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{
            delay: (index * delay) / 1250,
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {letter}
        </motion.span>
      ))}
    </Tag>
  );
};

export default BlurText;
