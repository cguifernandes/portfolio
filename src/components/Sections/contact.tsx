import { skills, useDefaultAnimation } from "../../utils/utils";
import CardStarBorder from "../card-star-border";
import { animated } from "@react-spring/web";

const Contact = () => {
	return (
		<section className="py-20 flex justify-center w-full bg-neutral-900">
			<div className="flex flex-col gap-y-10 max-w-7xl">
				<animated.h1
					style={useDefaultAnimation(300)}
					className="text-white text-center text-xl"
				>
					Contato
				</animated.h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2">
					{skills
						.sort((a, b) => a.name.localeCompare(b.name))
						.map((skill, index) => (
							<CardStarBorder
								theme="black"
								className="w-full"
								key={`${skill.name}${index}`}
								subtitle={skill.description}
								title={skill.name}
								delay={300}
							/>
						))}
				</div>
			</div>
		</section>
	);
};

export default Contact;
