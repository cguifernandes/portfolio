import clsx from "clsx";
import { ProjectsProps } from "../types/type";
import Button from "./button";
import { ExternalLink } from "lucide-react";

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
	return (
		<div
			className={clsx(
				"flex items-center gap-x-12 h-[320px]",
				reverse && "flex-row-reverse",
			)}
		>
			<img
				className="min-w-[570px] h-full relative border-2 border-neutral-800 object-cover rounded-lg hover:opacity-70 duration-300 ease-in-out"
				src={image}
				alt="Imagem do projeto"
			/>
			<div className="flex flex-col gap-y-5">
				<div className="flex items-center flex-col gap-y-1">
					<h1 className="text-lg text-white">{name}</h1>
					<div className="flex gap-x-1">
						{skills.map((skill, index) => (
							<span
								className="text-white bg-neutral-900 border border-neutral-800 rounded-md text-xs px-2 py-0.5"
								key={`${skill}${index}`}
							>
								{skill}
							</span>
						))}
					</div>
				</div>
				<p className="text-neutral-400 text-center text-sm">{description}</p>
				<div className="flex gap-x-3">
					{website && (
						<Button
							icon={<ExternalLink size={16} color="#fff" />}
							href={website}
							className="flex-1 flex justify-center gap-x-2 items-center text-center"
							theme="primary"
						>
							Visitar projeto
						</Button>
					)}
					{additionalLink && (
						<Button
							icon={<ExternalLink size={16} color="#fff" />}
							href={additionalLink}
							className="flex-1 flex justify-center gap-x-2 items-center text-center"
							theme="outline"
						>
							Link adicional
						</Button>
					)}
					{repo && (
						<Button
							icon={<ExternalLink size={16} color="#fff" />}
							href={repo}
							className="flex-1 flex justify-center gap-x-2 items-center text-center"
							theme="outline"
						>
							Repósitorio
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
