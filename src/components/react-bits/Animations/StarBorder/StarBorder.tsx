/*
	jsrepo 1.31.0
	Installed from https://reactbits.dev/ts/tailwind/
	04-02-2025
*/

import { motion } from "framer-motion";
import React from "react";

type StarBorderProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties["animationDuration"];
    animated?: boolean;
  };

const StarBorder = <T extends React.ElementType = "button">({
  as,
  className = "",
  color = "#0C91AC",
  speed = "6s",
  children,
  animated = false,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || "button";

  const motionProps = animated
    ? {
        initial: { y: -5, opacity: 0, filter: "blur(4px)" },
        whileInView: { y: 0, opacity: 1, filter: "blur(0px)" },
        viewport: { once: true },
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      }
    : {};

  if (animated) {
    const MotionComponent = motion(Component);

    return (
      <MotionComponent
        {...motionProps}
        className={`relative inline-block py-px overflow-hidden rounded-lg ${className}`}
        {...rest}
      >
        <div
          className="absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full star-movement-bottom z-0"
          style={{
            background: `radial-gradient(circle, ${color}, transparent 10%)`,
            animationDuration: speed,
          }}
        />
        <div
          className="absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full star-movement-top z-0"
          style={{
            background: `radial-gradient(circle, ${color}, transparent 10%)`,
            animationDuration: speed,
          }}
        />
        {children}
      </MotionComponent>
    );
  }

  return (
    <Component
      className={`relative inline-block py-px overflow-hidden rounded-lg ${className}`}
      {...rest}
    >
      <div
        className="absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      {children}
    </Component>
  );
};

export default StarBorder;
