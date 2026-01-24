"use client";

import type { Variants } from "motion/react";
import type { HTMLAttributes } from "react";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { motion, useAnimation } from "motion/react";
import { cn } from "../../lib/utils";

export interface ChevronLeftIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ChevronLeftIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const pathVariants: Variants = {
  normal: { x: 0 },
  animate: {
    x: [0, -2, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const ChevronLeftIcon = forwardRef<ChevronLeftIconHandle, ChevronLeftIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;
      return {
        startAnimation: async () => {
          await controls.start("animate");
          await controls.start("normal");
        },
        stopAnimation: async () => {
          await controls.start("normal");
        },
      };
    });

    useEffect(() => {
      if (!isControlledRef.current) {
        (async () => {
          await controls.start("animate");
          await controls.start("normal");
        })();
      }
    }, [controls]);

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          (async () => {
            await controls.start("animate");
            await controls.start("normal");
          })();
        } else {
          onMouseEnter?.(e);
        }
      },
      [controls, onMouseEnter],
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start("normal");
        } else {
          onMouseLeave?.(e);
        }
      },
      [controls, onMouseLeave],
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
          style={{ overflow: "visible" }}
        >
          <motion.path
            d="m15 18-6-6 6-6"
            animate={controls}
            variants={pathVariants}
          />
        </svg>
      </div>
    );
  },
);

ChevronLeftIcon.displayName = "ChevronLeftIcon";

export { ChevronLeftIcon };
