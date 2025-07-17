import StarBorder from "../components/react-bits/Animations/StarBorder/StarBorder";
import { tv, VariantProps } from "tailwind-variants";

const card = tv({
  base: "rounded-lg px-3 py-2 duration-300 ease-in-out border border-neutral-800 relative",
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
    subtitle: string;
    delay?: number;
  };

const CardStarBorder = ({
  title,
  delay,
  theme,
  subtitle,
  className,
  ...props
}: Props) => {
  if (delay) {
    return (
      <div>
        <StarBorder {...props} as="div">
          <div
            className={card({
              theme,
            })}
          >
            <h2 className="text-white z-10 select-none">{title}</h2>
            <p
              title={subtitle}
              className="text-neutral-400 line-clamp-3 z-10 select-none text-sm"
            >
              {subtitle}
            </p>
          </div>
        </StarBorder>
      </div>
    );
  }

  return (
    <StarBorder {...props} as="div" className={className}>
      <div
        className={card({
          theme,
        })}
      >
        <h2 className="text-white z-10 select-none">{title}</h2>
        <p
          title={subtitle}
          className="text-neutral-400 line-clamp-3 z-10 select-none text-sm"
        >
          {subtitle}
        </p>
      </div>
    </StarBorder>
  );
};

export default CardStarBorder;
