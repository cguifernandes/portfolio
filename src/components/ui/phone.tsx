import { motion, useAnimation, Variants } from "motion/react";
import type { HTMLAttributes } from "react";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { cn } from "../../lib/utils";

export interface PhoneIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface PhoneIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

// Variants sincronizados para path
const pathVariants: Variants = {
  normal: { opacity: 1, pathLength: 1, pathOffset: 0 },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: { duration: 0.6, ease: "easeInOut" }, // duração sincronizada
  },
};

const PhoneIcon = forwardRef<PhoneIconHandle, PhoneIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const pathControls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => ({
      startAnimation: async () => {
        await pathControls.start("animate");
        await pathControls.start("normal");
      },
      stopAnimation: async () => {
        await pathControls.start("normal");
      },
    }));

    // Animação inicial automática
    useEffect(() => {
      if (!isControlledRef.current) {
        (async () => {
          await pathControls.start("animate");
        })();
      }
    }, [pathControls]);

    // Hover: animação completa e volta ao normal
    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          (async () => {
            await pathControls.start("animate");
            await pathControls.start("normal");
          })();
        } else {
          onMouseEnter?.(e);
        }
      },
      [pathControls, onMouseEnter]
    );

    // Mouse leave: garante que volte para normal
    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          pathControls.start("normal");
        } else {
          onMouseLeave?.(e);
        }
      },
      [pathControls, onMouseLeave]
    );

    return (
      <div
        className={cn(className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-phone-icon lucide-phone"
        >
          <motion.path
            d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
            variants={pathVariants}
            initial="normal"
            animate={pathControls}
          />
        </svg>
      </div>
    );
  }
);

PhoneIcon.displayName = "PhoneIcon";

export { PhoneIcon };
