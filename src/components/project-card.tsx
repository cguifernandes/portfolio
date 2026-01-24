import clsx from "clsx";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import type { ProjectsProps } from "../types/type";
import Badge from "./badge";
import Button from "./button";

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
        reverse ? "lg:flex-row-reverse" : "lg:flex-row",
      )}
    >
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative max-w-xl max-h-80 h-full w-full border-2 border-neutral-800 rounded-lg"
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
          className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center"
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
      </motion.div>
      <div className="flex max-w-2xl w-full lg:w-1/2 flex-col gap-y-5">
        <div className="flex items-center flex-col gap-y-1">
          <motion.h1
            initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-lg text-white"
          >
            {name}
          </motion.h1>
          <div className="flex flex-wrap justify-center gap-1">
            {skills.map((skill, index) => (
              <Badge key={skill} skill={skill} index={index} />
            ))}
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          title={description}
          className="text-neutral-400 line-clamp-6 text-center text-sm"
        >
          {description}
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-3">
          {website && (
            <a className="w-full" href={website} target="_blank">
              <Button
                animated
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
                animated
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
                animated
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
