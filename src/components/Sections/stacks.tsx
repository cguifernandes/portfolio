import { useInView } from "react-intersection-observer";
import { blurAnimation, skills, useDefaultAnimation } from "../../utils/utils";
import CardStarBorder from "../card-star-border";
import { animated, easings, useSpring } from "@react-spring/web";

const Stacks = () => {
	const { animation: animationStyle, ref: refStyle } = useDefaultAnimation(50);
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
		delay: 100,
	});

	return (
		<section
			id="stacks"
			className="py-20 scroll-mt-8 flex justify-center w-full bg-neutral-900"
		>
			<div className="flex flex-col gap-y-10 max-w-7xl">
				<animated.h1
					ref={refStyle}
					style={animationStyle}
					className="text-white text-center text-xl"
				>
					Stacks
				</animated.h1>
				<div
					ref={ref}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2"
				>
					{skills
						.sort((a, b) => a.name.localeCompare(b.name))
						.map((skill, index) => {
							const animation = useSpring({
								from: blurAnimation.from,
								to: inView ? blurAnimation.to : blurAnimation.from,
								config: {
									easing: easings.easeOutCubic,
								},
								delay: 50,
								reset: true,
							});

							return (
								<animated.div key={`${skill.name}${index}`} style={animation}>
									<CardStarBorder
										theme="black"
										className="w-full"
										subtitle={skill.description}
										title={skill.name}
									/>
								</animated.div>
							);
						})}
				</div>
			</div>
		</section>
	);
};

export default Stacks;
