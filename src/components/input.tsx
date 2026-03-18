import clsx from "clsx";
import type { Easing } from "framer-motion";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import { useI18n } from "../i18n/useI18n";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string | undefined;
  patternClassName?: string;
  mandatory?: boolean;
  id: string;
  animated?: boolean;
};

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      id,
      label,
      error,
      patternClassName,
      mandatory,
      className,
      animated,
      ...props
    },
    ref,
  ) => {
    const { t } = useI18n();
    const motionProps = animated
      ? {
          initial: { opacity: 0, filter: "blur(4px)", y: -5 },
          whileInView: { opacity: 1, filter: "blur(0px)", y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, ease: "easeOut" as Easing },
        }
      : null;
    return (
      <motion.div
        {...motionProps}
        className={clsx("flex flex-col relative gap-y-1", patternClassName)}
      >
        <div className="flex justify-between items-center w-full">
          {label && (
            <label htmlFor={id} className="text-sm text-white">
              {label}
            </label>
          )}
          {mandatory && (
            <span className="text-xs text-neutral-500">
              {t("contact.form.required")}
            </span>
          )}
        </div>
        <input
          ref={ref}
          className={clsx(
            "text-sm text-white px-3 py-2 rounded-md h-10 ring-offset-neutral-900 placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border border-neutral-700 focus-visible:ring-2 focus-visible:ring-neutral-300",
            className,
          )}
          id={id}
          {...props}
        />
        {error && (
          <span className="text-xs font-montserrat text-red-500">{error}</span>
        )}
      </motion.div>
    );
  },
);

export default Input;
