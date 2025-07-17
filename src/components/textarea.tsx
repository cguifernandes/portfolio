import clsx from "clsx";
import { forwardRef } from "react";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string | undefined;
  patternClassName?: string;
  mandatory?: boolean;
  id: string;
};

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  (
    { id, label, error, patternClassName, mandatory, className, ...props },
    ref
  ) => {
    return (
      <div className={clsx("flex flex-col relative gap-y-1", patternClassName)}>
        <div className="flex justify-between items-center w-full">
          {label && (
            <label htmlFor={id} className="text-sm text-white">
              {label}
            </label>
          )}
          {mandatory && (
            <span className="text-xs text-neutral-500">Obrigatório</span>
          )}
        </div>
        <textarea
          ref={ref}
          className={clsx(
            "text-sm text-white px-3 py-2 resize-none rounded-md h-32 ring-offset-neutral-900 placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border border-neutral-700 focus-visible:ring-2 focus-visible:ring-neutral-300",
            className
          )}
          id={id}
          {...props}
        />
        {error && (
          <span className="text-xs font-montserrat text-red-500">{error}</span>
        )}
      </div>
    );
  }
);

export default Textarea;
