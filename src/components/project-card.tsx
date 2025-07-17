import clsx from "clsx";
import { ProjectsProps } from "../types/type";
import Button from "./button";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={clsx(
        "flex items-center flex-col gap-y-4 gap-x-12 lg:h-[320px]",
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      )}
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative max-w-xl h-full w-full border-2 border-neutral-800 rounded-lg"
      >
        <img
          className="w-full h-full object-cover rounded-lg"
          src={image}
          alt="Imagem do projeto"
        />
        <div
          style={{
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.2s ease-in-out",
          }}
          className="absolute inset-0 bg-black/50 flex items-center justify-center"
        >
          <a
            href={website ?? repo}
            target="_blank"
            className="cursor-pointer w-full h-full flex items-center justify-center"
          >
            <div className="p-3 rounded-full bg-neutral-700/80 backdrop-blur-sm border-neutral-800">
              <ExternalLink size={20} color="#fff" />
            </div>
          </a>
        </div>
      </div>
      <div className="flex max-w-2xl w-full lg:w-1/2 flex-col gap-y-5">
        <div className="flex items-center flex-col gap-y-1">
          <h1 className="text-lg text-white">{name}</h1>
          <div className="flex flex-wrap justify-center gap-1">
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
        <p
          title={description}
          className="text-neutral-400 line-clamp-6 text-center text-sm"
        >
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          {website && (
            <a className="w-full" href={website} target="_blank">
              <Button
                icon={<ExternalLink size={16} color="#fff" />}
                className="flex-1 w-full flex justify-center gap-x-2 items-center text-center"
                theme="primary"
              >
                Visitar projeto
              </Button>
            </a>
          )}
          {additionalLink && (
            <a className="w-full" href={additionalLink} target="_blank">
              <Button
                icon={<ExternalLink size={16} color="#fff" />}
                className="flex-1 w-full flex justify-center gap-x-2 items-center text-center"
                theme="outline"
              >
                Link adicional
              </Button>
            </a>
          )}
          {repo && (
            <a className="w-full" href={repo} target="_blank">
              <Button
                icon={<ExternalLink size={16} color="#fff" />}
                className="flex-1 w-full flex justify-center gap-x-2 items-center text-center"
                theme="outline"
              >
                Repósitorio
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
