import { animated } from "@react-spring/web";
import StarBorder from "../components/react-bits/Animations/StarBorder/StarBorder";
import Button from "./button";
import { useDefaultAnimation } from "../utils/utils";

type Props = React.ComponentPropsWithoutRef<"button"> & {
	className?: string;
	color?: string;
	speed?: React.CSSProperties["animationDuration"];
	delay?: number;
	children: React.ReactNode;
};

const ButtonStarBorder = ({ children, delay, className, ...props }: Props) => {
	const spring = useDefaultAnimation(delay);

	if (delay) {
		return (
			<animated.div className={className} style={spring}>
				<StarBorder {...props} as="button">
					<Button className="w-96 relative z-1" theme="primary">
						{children}
					</Button>
				</StarBorder>
			</animated.div>
		);
	}

	return (
		<StarBorder {...props} as="button">
			<Button className="w-96 relative z-1" theme="primary">
				{children}
			</Button>
		</StarBorder>
	);
};

export default ButtonStarBorder;
