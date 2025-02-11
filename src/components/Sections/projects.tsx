import { projects, useDefaultAnimation } from "../../utils/utils";
import { animated } from "@react-spring/web";
import ProjectCard from "../project-card";

const Projects = () => {
	const { animation, ref } = useDefaultAnimation(50);

	return (
		<section
			id="projects"
			className="py-20 scroll-mt-8 flex justify-center w-full"
		>
			<div className="flex flex-col gap-y-10 max-w-7xl">
				<animated.h1
					ref={ref}
					style={animation}
					className="text-white text-center text-xl"
				>
					Projetos
				</animated.h1>
				<div className="flex flex-col gap-y-20">
					{projects.map((skill, index) => (
						<ProjectCard
							description={skill.description}
							image={skill.image}
							name={skill.name}
							skills={skill.skills}
							additionalLink={skill.additionalLink}
							repo={skill.repo}
							website={skill.website}
							reverse={index % 2 === 0}
							key={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
