import { skills } from "../../utils/utils";
import CardStarBorder from "../card-star-border";

const Stacks = () => {
	return (
		<section className="py-20 flex justify-center w-full bg-neutral-900">
			<div className="flex flex-col gap-y-2 max-w-7xl">
				<h1 className="text-white text-center text-xl">Stacks</h1>
				<div className="flex flex-wrap gap-x-4 gap-y-2">
					{skills.map((skill, index) => (
						<CardStarBorder
							className="min-w-[380px] w-full max-w-[446px]"
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

export default Stacks;
