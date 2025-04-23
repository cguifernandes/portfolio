import clsx from "clsx";
import { ProjectsProps } from "../types/type";
import Button from "./button";
import { ExternalLink } from "lucide-react";
import { animated, easings, useSpring } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { blurAnimation } from "../utils/utils";

type Props = ProjectsProps & {
	reverse?: boolean;
};

const ProjectCard = ({
	description,
	image,
	name,
	skills,
	additionalLink,
	repo,
	website,
	reverse,
}: Props) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
		delay: 100,
	});

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
		<div
			ref={ref}
			className={clsx(
				"flex items-center flex-col gap-y-4 gap-x-12 lg:h-[320px]",
				reverse ? "lg:flex-row-reverse" : "lg:flex-row",
			)}
		>
			<animated.img
				className="max-w-xl w-full h-full relative border-2 border-neutral-800 object-cover rounded-lg"
				src={image}
				alt="Imagem do projeto"
				style={animation}
			/>
			<div className="flex max-w-2xl w-full lg:w-1/2 flex-col gap-y-5">
				<div className="flex items-center flex-col gap-y-1">
					<animated.h1 className="text-lg text-white" style={animation}>
						{name}
					</animated.h1>
					<div className="flex flex-wrap justify-center gap-1">
						{skills.map((skill, index) => (
							<animated.span
								className="text-white bg-neutral-900 border border-neutral-800 rounded-md text-xs px-2 py-0.5"
								key={`${skill}${index}`}
								style={animation}
							>
								{skill}
							</animated.span>
						))}
					</div>
				</div>
				<animated.p
					title={description}
					className="text-neutral-400 line-clamp-6 text-center text-sm"
					style={animation}
				>
					{description}
				</animated.p>
				<div className="flex flex-col sm:flex-row gap-3">
					{website && (
						<animated.a
							className="w-full"
							ref={ref}
							style={animation}
							href={website}
						>
							<Button
								icon={<ExternalLink size={16} color="#fff" />}
								className="flex-1 w-full flex justify-center gap-x-2 items-center text-center"
								theme="primary"
							>
								Visitar projeto
							</Button>
						</animated.a>
					)}
					{additionalLink && (
						<animated.a
							className="w-full"
							ref={ref}
							style={animation}
							href={additionalLink}
						>
							<Button
								icon={<ExternalLink size={16} color="#fff" />}
								className="flex-1 w-full flex justify-center gap-x-2 items-center text-center"
								theme="outline"
							>
								Link adicional
							</Button>
						</animated.a>
					)}
					{repo && (
						<animated.a
							className="w-full"
							ref={ref}
							style={animation}
							href={repo}
						>
							<Button
								icon={<ExternalLink size={16} color="#fff" />}
								className="flex-1 w-full flex justify-center gap-x-2 items-center text-center"
								theme="outline"
							>
								Repósitorio
							</Button>
						</animated.a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
