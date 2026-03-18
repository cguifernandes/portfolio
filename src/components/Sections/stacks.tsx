import clsx from "clsx";
import { motion } from "framer-motion";
import { useI18n } from "../../i18n/useI18n";
import { skills } from "../../utils/utils";
import CardStarBorder from "../card-star-border";
import {
  STACK_DESCRIPTION_KEYS,
  STACK_EXPERIENCE_KEYS,
  STACK_TITLE_KEYS,
} from "../stack-icon-map";
import { StackIcon } from "../stack-icons";

const Stacks = () => {
  const { t } = useI18n();

  return (
    <section
      id="stacks"
      className="py-20 scroll-mt-8 px-6 lg:px-4 flex justify-center w-full bg-neutral-900"
    >
      <div className="flex flex-col gap-y-10 max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-white text-center text-xl"
        >
          {t("stacks.title")}
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2">
          {skills
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((skill, index) => (
              <div
                className={clsx(
                  index === skills.length - 1 &&
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
                  title={STACK_TITLE_KEYS[skill.name] ? t(STACK_TITLE_KEYS[skill.name]) : skill.name}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Stacks;
