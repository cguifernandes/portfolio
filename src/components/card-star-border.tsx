import { tv, VariantProps } from "tailwind-variants";
import StarBorder from "../components/react-bits/Animations/StarBorder/StarBorder";

const card = tv({
  base: "rounded-lg flex flex-col gap-y-4 p-5 duration-300 ease-in-out border border-neutral-800 relative",
  variants: {
    theme: {
      primary: "bg-neutral-950",
      black: "bg-neutral-950",
    },
  },
  defaultVariants: {
    theme: "primary",
  },
});

type Props = React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof card> & {
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties["animationDuration"];
    title: string;
    subtitle: string | React.ReactNode;
    animated?: boolean;
    icon?: React.ReactNode;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    cardClassName?: string;
  };

const CardStarBorder = ({
  title,
  animated,
  theme,
  subtitle,
  className,
  icon,
  onMouseEnter,
  onMouseLeave,
  cardClassName,
  ...props
}: Props) => {
  return (
    <StarBorder {...props} as="div" className={className} animated={animated}>
      <div
        className={card({
          theme,
          className: cardClassName,
        })}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {icon && (
          <div className="flex items-center p-2.5 w-fit h-fit bg-gradient-primary hover:![background-position:0%_50%] rounded-lg text-white justify-center">
            {icon}
          </div>
        )}
        <h2 className="text-white leading-none z-10 select-none text-xl font-medium">
          {title}
        </h2>
        {typeof subtitle === "string" ? (
          <p
            title={subtitle}
            className="text-neutral-400 line-clamp-3 z-10 select-none text-sm"
          >
            {subtitle}
          </p>
        ) : (
          <div className="text-neutral-400 z-10 select-none text-sm">
            {subtitle}
          </div>
        )}
      </div>
    </StarBorder>
  );
};

export default CardStarBorder;
