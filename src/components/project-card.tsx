import { motion } from "framer-motion";
import { useI18n } from "../i18n/useI18n";
import type { ProjectsProps } from "../types/type";
import Badge from "./badge";
import Button from "./button";

// mesma hachura usada no placeholder de retrato da secao Sobre
const HATCH_BACKGROUND =
  "repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0 2px, transparent 2px 10px)";

type Props = ProjectsProps & {
  index: number;
};

const ProjectCard = ({
  id,
  image,
  skills,
  additionalLink,
  repo,
  website,
  index,
}: Props) => {
  const { t } = useI18n();
  const description = t(`projects.items.${id}.description`);

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative flex h-full flex-col overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950 transition duration-300 ease-in-out hover:z-10 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/60"
    >
      <div className="relative border-neutral-800 border-b">
        {image ? (
          <img
            src={image}
            alt={t(`projects.items.${id}.imageAlt`)}
            loading="lazy"
            className="aspect-16/10 w-full object-cover object-top"
          />
        ) : (
          <div
            className="flex aspect-16/10 w-full items-end p-4"
            style={{ backgroundImage: HATCH_BACKGROUND }}
          >
            <span className="font-mono text-[10px] text-neutral-500 tracking-[0.08em]">
              {t(`projects.items.${id}.name`)}
            </span>
          </div>
        )}
        <span className="absolute top-3 left-3 rounded-md bg-neutral-950/70 px-2 py-1 font-mono text-[10px] text-neutral-400 tracking-[0.08em] backdrop-blur-sm">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-y-4 p-5">
        <h2 className="text-lg text-white">{t(`projects.items.${id}.name`)}</h2>

        <p
          title={description}
          className="line-clamp-4 flex-1 text-neutral-400 text-sm"
        >
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill, skillIndex) => (
            <Badge key={skill} skill={skill} index={skillIndex} />
          ))}
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          {website && (
            <Button
              animated
              theme="primary"
              href={website}
              target="_blank"
              patternClassName="flex-1 flex"
              className="w-full justify-center"
            >
              {t("projects.buttons.visit")}
            </Button>
          )}

          {repo && (
            <Button
              animated
              theme="outline"
              href={repo}
              target="_blank"
              patternClassName="flex-1 flex"
              className="w-full justify-center"
            >
              {t("projects.buttons.repository")}
            </Button>
          )}

          {additionalLink && (
            <Button
              animated
              theme="outline"
              href={additionalLink}
              target="_blank"
              patternClassName="flex-1 flex"
              className="w-full justify-center"
            >
              {t("projects.buttons.additionalLink")}
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
