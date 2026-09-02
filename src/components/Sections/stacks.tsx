import clsx from "clsx";
import { motion } from "framer-motion";
import { useI18n } from "../../i18n/useI18n";
import { skills } from "../../utils/utils";
import { GlowBackdrop } from "../backdrops";
import CardStarBorder from "../card-star-border";
import Container from "../container";
import {
  STACK_DESCRIPTION_KEYS,
  STACK_EXPERIENCE_KEYS,
  STACK_TITLE_KEYS,
} from "../stack-icon-map";
import { StackIcon } from "../stack-icons";

const Stacks = () => {
  const { t } = useI18n();
  const sortedSkills = [...skills].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <Container backdrop={<GlowBackdrop position="top-left" />} id="stacks">
      <motion.div
        initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-wrap items-baseline justify-between gap-5"
      >
        <span className="text-primary-500 text-xs uppercase tracking-[0.13em]">
          {t("stacks.label")}
        </span>
        <h1 className="text-white text-2xl leading-[1.4] tracking-[-0.02em]">
          {t("stacks.title")}
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2">
        {sortedSkills.map((skill, index) => (
          <div
            className={clsx(
              index === sortedSkills.length - 1 &&
                "col-span-1 sm:col-span-2 lg:col-span-1",
            )}
            key={`${skill.name}${index}`}
          >
            <CardStarBorder
              animated
              theme="black"
              className="w-full"
              icon={<StackIcon name={skill.name} />}
              badge={t(STACK_EXPERIENCE_KEYS[skill.name])}
              subtitle={t(STACK_DESCRIPTION_KEYS[skill.name])}
              title={
                STACK_TITLE_KEYS[skill.name]
                  ? t(STACK_TITLE_KEYS[skill.name])
                  : skill.name
              }
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Stacks;
