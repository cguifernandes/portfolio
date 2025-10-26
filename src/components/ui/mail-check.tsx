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

export interface MailCheckIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface MailCheckIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

// 🔹 mesma duração para path e rect, animação sincronizada
const pathVariants: Variants = {
  normal: { opacity: 1, pathLength: 1, pathOffset: 0 },
  animate: {
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: { duration: 0.6, ease: "easeInOut" }, // sincronizado
  },
};

const rectVariants: Variants = {
  normal: { opacity: 1, pathLength: 1, pathOffset: 0 },
  animate: {
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: { duration: 0.6, ease: "easeInOut" }, // mesma duração
  },
};

const MailCheckIcon = forwardRef<MailCheckIconHandle, MailCheckIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const pathControls = useAnimation();
    const rectControls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => ({
      startAnimation: async () => {
        await Promise.all([
          pathControls.start("animate"),
          rectControls.start("animate"),
        ]);
        await Promise.all([
          pathControls.start("normal"),
          rectControls.start("normal"),
        ]);
      },
      stopAnimation: async () => {
        await Promise.all([
          pathControls.start("normal"),
          rectControls.start("normal"),
        ]);
      },
    }));

    useEffect(() => {
      if (!isControlledRef.current) {
        (async () => {
          await Promise.all([
            pathControls.start("animate"),
            rectControls.start("animate"),
          ]);
        })();
      }
    }, [pathControls, rectControls]);

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          (async () => {
            await Promise.all([
              pathControls.start("animate"),
              rectControls.start("animate"),
            ]);
            await Promise.all([
              pathControls.start("normal"),
              rectControls.start("normal"),
            ]);
          })();
        } else {
          onMouseEnter?.(e);
        }
      },
      [pathControls, rectControls, onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          pathControls.start("normal");
          rectControls.start("normal");
        } else {
          onMouseLeave?.(e);
        }
      },
      [pathControls, rectControls, onMouseLeave]
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
          className="lucide lucide-mail-icon lucide-mail"
        >
          <motion.path
            variants={pathVariants}
            initial="normal"
            animate={pathControls}
            d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"
          />
          <motion.rect
            variants={rectVariants}
            initial="normal"
            animate={rectControls}
            x="2"
            y="4"
            width="20"
            height="16"
            rx="2"
          />
        </svg>
      </div>
    );
  }
);

MailCheckIcon.displayName = "MailCheckIcon";

export { MailCheckIcon };
