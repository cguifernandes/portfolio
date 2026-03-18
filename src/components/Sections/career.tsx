import { motion } from "framer-motion";
import { career } from "../../utils/utils";
import { useI18n } from "../../i18n/useI18n";
import BlurText from "../blur-text";
import CareerCard from "../career-card";

const Career = () => {
  const { t } = useI18n();
  const sortedCareer = [...career].sort((a, b) => {
    const dateA = new Date(a.startDate).getTime();
    const dateB = new Date(b.startDate).getTime();
    return dateB - dateA;
  });

  return (
    <section
      id="career"
      className="py-20 scroll-mt-8 px-6 lg:px-4 flex justify-center w-full"
    >
      <div className="flex flex-col gap-y-10 max-w-7xl w-full">
        <motion.h1
          initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-white text-center text-xl"
        >
          <BlurText
            text={t("career.title")}
            delay={50}
            className="text-white text-center text-xl"
          />
        </motion.h1>

        <div className="relative flex flex-col gap-y-8 w-full">
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-neutral-700" />

          {sortedCareer.map((careerItem, index) => {
            const isLeft = index % 2 === 0;
            return (
              <CareerCard
                key={`${careerItem.company}-${careerItem.startDate}`}
                item={careerItem}
                isLeft={isLeft}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Career;
