import { motion } from "framer-motion";
import { useI18n } from "../../i18n/useI18n";
import { career } from "../../utils/utils";
import CareerCard from "../career-card";
import Container from "../container";

const Career = () => {
  const { t } = useI18n();
  const sortedCareer = [...career].sort((a, b) => {
    const dateA = new Date(a.startDate).getTime();
    const dateB = new Date(b.startDate).getTime();
    return dateB - dateA;
  });

  return (
    <Container id="career">
      <motion.div
        initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-2"
      >
        <span className="text-primary-500 text-xs uppercase tracking-[0.13em]">
          {t("career.label")}
        </span>
        <h1 className="text-white text-2xl leading-[1.4] tracking-[-0.02em]">
          {t("career.title")}
        </h1>
      </motion.div>

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
    </Container>
  );
};

export default Career;
