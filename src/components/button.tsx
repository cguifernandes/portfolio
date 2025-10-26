import clsx from "clsx";
import { Easing, motion } from "framer-motion";
import React from "react";
import { tv, VariantProps } from "tailwind-variants";
import Spinner from "./spinner";

const button = tv({
  base: "rounded-lg px-3 h-10 py-2 text-sm text-white cursor-pointer duration-300 ease-in-out",
  variants: {
    theme: {
      primary: "bg-gradient-primary",
      outline: "button-gradient-outline border border-neutral-800",
    },
  },
  defaultVariants: {
    theme: "primary",
  },
});

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    children: React.ReactNode;
    href?: string;
    icon?: React.ReactNode;
    isLoading?: boolean;
    patternClassName?: string;
    target?: string;
    animated?: boolean;
  };

const Button = ({
  theme,
  className,
  isLoading,
  children,
  icon,
  patternClassName,
  href,
  target,
  animated = false,
}: Props) => {
  const buttonContent = (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {icon} {children}
        </>
      )}
    </>
  );

  const motionProps = animated
    ? {
        initial: { y: -5, opacity: 0, filter: "blur(4px)" },
        whileInView: { y: 0, opacity: 1, filter: "blur(0px)" },
        viewport: { once: true },
        transition: {
          duration: 0.5,
          ease: "easeOut" as Easing,
        },
      }
    : null;

  if (href) {
    if (animated) {
      return (
        <motion.a
          {...motionProps}
          target={target}
          className={clsx("w-full", patternClassName)}
          href={href}
        >
          <button
            className={button({ theme, className: `w-full h-10 ${className}` })}
          >
            {buttonContent}
          </button>
        </motion.a>
      );
    }

    return (
      <a className="w-full" href={href} target={target}>
        <button
          className={button({ theme, className: `w-full h-10 ${className}` })}
        >
          {buttonContent}
        </button>
      </a>
    );
  }

  if (animated) {
    return (
      <motion.div {...motionProps} className={patternClassName}>
        <button className={button({ theme, className })}>
          {buttonContent}
        </button>
      </motion.div>
    );
  }

  return (
    <button className={button({ theme, className })}>{buttonContent}</button>
  );
};

export default Button;
