import { useRef, useEffect, useState } from "react";
import { useSprings, animated } from "@react-spring/web";

type Props = {
	text?: string;
	delay?: number;
	className?: string;
	animateBy?: "words" | "letters";
	direction?: "top" | "bottom";
	threshold?: number;
	rootMargin?: string;
	animationFrom?: { filter: string; opacity: number; transform: string };
	animationTo?: Array<{ filter: string; opacity: number; transform: string }>;
	onAnimationComplete?: () => void;
};

const BlurText = ({
	text = "",
	delay = 200,
	className = "",
	animateBy = "words",
	direction = "top",
	threshold = 0.1,
	rootMargin = "0px",
	animationFrom,
	animationTo,
	onAnimationComplete,
}: Props) => {
	const elements = animateBy === "words" ? text.split(" ") : text.split("");
	const easing = "easeOutCubic";
	const [inView, setInView] = useState(false);
	const ref = useRef<HTMLParagraphElement | null>(null);
	const animatedCount = useRef(0);

	const defaultFrom =
		direction === "top"
			? {
					filter: "blur(10px)",
					opacity: 0,
					transform: "translate3d(0,-50px,0)",
				}
			: {
					filter: "blur(10px)",
					opacity: 0,
					transform: "translate3d(0,50px,0)",
				};

	const defaultTo = [
		{
			filter: "blur(5px)",
			opacity: 0.5,
			transform:
				direction === "top" ? "translate3d(0,5px,0)" : "translate3d(0,-5px,0)",
		},
		{ filter: "blur(0px)", opacity: 1, transform: "translate3d(0,0,0)" },
	];

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);

					if (!ref.current) return;

					observer.unobserve(ref.current);
				}
			},
			{ threshold, rootMargin },
		);

		if (!ref.current) return;
		observer.observe(ref.current);

		return () => observer.disconnect();
	}, [threshold, rootMargin]);

	const springs = useSprings(
		elements.length,
		elements.map((_, i) => ({
			from: animationFrom || defaultFrom,
			to: async (next) => {
				if (!inView) return;

				for (const step of animationTo || defaultTo) {
					await next({ ...step, config: { easing } });
				}

				animatedCount.current += 1;
				if (animatedCount.current === elements.length && onAnimationComplete) {
					onAnimationComplete();
				}
			},
			delay: i * delay,
		})),
	);

	return (
		<p ref={ref} className={className}>
			{springs.map((props, index) => (
				<animated.span
					key={index}
					style={{
						...props,
						display: "inline-block",
						willChange: "transform, filter, opacity",
					}}
				>
					{elements[index] === " " ? "\u00A0" : elements[index]}
					{animateBy === "words" && index < elements.length - 1 && "\u00A0"}
				</animated.span>
			))}
		</p>
	);
};

export default BlurText;
