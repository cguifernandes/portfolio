import StarBorder from "../components/react-bits/Animations/StarBorder/StarBorder";
import { animated } from "@react-spring/web";
import { useDefaultAnimation } from "../utils/utils";
import { tv, VariantProps } from "tailwind-variants";

const card = tv({
	base: "rounded-lg px-3 py-2 duration-300 ease-in-out border border-neutral-800 relative",
	variants: {
		theme: {
			primary: "bg-gradient-outline",
			black: "bg-gradient-outline-black",
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

const CardStarBorder = ({ title, delay, theme, subtitle, ...props }: Props) => {
	const spring = useDefaultAnimation(delay);

	if (delay) {
		return (
			<animated.div style={spring}>
				<StarBorder {...props} as="div">
					<div
						className={card({
							theme,
						})}
					>
						<h2 className="text-white z-10 select-none">{title}</h2>
						<p className="text-neutral-400 line-clamp-3 z-10 select-none text-sm">
							{subtitle}
						</p>
					</div>
				</StarBorder>
			</animated.div>
		);
	}

	return (
		<StarBorder {...props} as="div">
			<div
				className={card({
					theme,
				})}
			>
				<h2 className="text-white z-10 select-none">{title}</h2>
				<p className="text-neutral-400 z-10 select-none text-sm">{subtitle}</p>
			</div>
		</StarBorder>
	);
};

export default CardStarBorder;
