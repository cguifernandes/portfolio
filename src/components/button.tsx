import React from "react";
import { tv, VariantProps } from "tailwind-variants";
import Spinner from "./spinner";
import clsx from "clsx";

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
    delay?: number;
    icon?: React.ReactNode;
    isLoading?: boolean;
    patternClassName?: string;
    target?: string;
  };

const Button = ({
  theme,
  className,
  isLoading,
  children,
  icon,
  patternClassName,
  delay,
  href,
  target,
}: Props) => {
  if (href) {
    if (delay) {
      return (
        <a
          target={target}
          className={clsx("w-full", patternClassName)}
          href={href}
        >
          <button
            className={button({ theme, className: `w-full h-10 ${className}` })}
          >
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                {icon} {children}
              </>
            )}
          </button>
        </a>
      );
    }

    return (
      <a className="w-full" href={href} target={target}>
        <button
          className={button({ theme, className: `w-full h-10 ${className}` })}
        >
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              {icon} {children}
            </>
          )}
        </button>
      </a>
    );
  }

  if (delay) {
    return (
      <div className={patternClassName}>
        <button className={button({ theme, className })}>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              {icon} {children}
            </>
          )}
        </button>
      </div>
    );
  }

  return (
    <button className={button({ theme, className })}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {icon} {children}
        </>
      )}
    </button>
  );
};

export default Button;
