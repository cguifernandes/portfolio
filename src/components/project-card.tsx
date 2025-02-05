import clsx from "clsx";
import { ProjectsProps } from "../types/type";
import Button from "./button";
import { useState } from "react";
import { motion } from "framer-motion";
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
	const [isHoverImage, setIsHoverImage] = useState(false);

	return (
		<div
			className={clsx(
				"flex items-center gap-x-12 h-[320px]",
				reverse && "flex-row-reverse",
			)}
		>
			<div
				onMouseEnter={() => setIsHoverImage(true)}
				onMouseLeave={() => setIsHoverImage(false)}
				className="relative border-2 border-neutral-800 h-full rounded-lg"
			>
				<motion.img
					className="min-w-[570px] h-full object-cover rounded-lg"
					src={image}
					alt="Imagem do projeto"
					initial={{ opacity: 1 }}
					animate={{
						opacity: isHoverImage ? 0.5 : 1,
					}}
					transition={{ duration: 0.2 }}
				/>
				<motion.a
					initial={{ opacity: 0 }}
					animate={{
						opacity: isHoverImage ? 1 : 0,
						display: isHoverImage ? "inline" : "none",
					}}
					href={website || repo}
					target="_blank"
					rel="noreferrer"
					className="absolute left-1/2 top-1/2 p-3 border rounded-full border-neutral-800 bg-neutral-900/40 backdrop-blur-md -translate-x-1/2 -translate-y-1/2"
				>
					<ExternalLink strokeWidth={1.5} color="#fff" size={28} />
				</motion.a>
			</div>
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
							href={website}
							className="flex-1 text-center"
							theme="primary"
						>
							Visitar projeto
						</Button>
					)}
					{additionalLink && (
						<Button
							href={additionalLink}
							className="flex-1 text-center"
							theme="outline"
						>
							Link adicional
						</Button>
					)}
					{repo && (
						<Button href={repo} className="flex-1 text-center" theme="outline">
							Repósitorio
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
