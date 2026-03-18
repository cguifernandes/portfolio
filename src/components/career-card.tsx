import type { MotionProps } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import type { CareerProps } from "../types/type";
import Badge from "./badge";
import CardStarBorder from "./card-star-border";
import { useI18n } from "../i18n/useI18n";

type CareerCardProps = {
  item: CareerProps;
  isLeft: boolean;
};

const CareerCard = ({ item, isLeft }: CareerCardProps) => {
  const { t, language } = useI18n();
  const motionProps: MotionProps = {
    initial: { y: -5, opacity: 0, filter: "blur(4px)" },
    whileInView: { y: 0, opacity: 1, filter: "blur(0px)" },
    viewport: { once: true },
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  };

  return (
    <div
      className={cn(
        "relative flex flex-col-reverse gap-y-2 gap-x-12 w-full pl-6 sm:pl-8 hover md:pl-0 md:pr-0",
        isLeft ? "md:flex-row" : "md:flex-row-reverse",
      )}
    >
      <div className="relative flex flex-row gap-x-6 w-full md:w-[50%] text-left">
        <div className="flex-1 flex min-w-0">
          <CardStarBorder
            animated
            theme="black"
            cardClassName="gap-y-2"
            className="w-full gap-y-2"
            title={t(`career.items.${item.id}.position`)}
            subtitle={
              <div className="flex flex-col gap-y-2">
                <p
                  className={cn(
                    "text-primary-600 leading-0 font-semibold text-base",
                  )}
                >
                  {t(`career.items.${item.id}.company`)}
                </p>

                {item.description && (
                  <p
                    title={item.description}
                    className={cn("text-neutral-400 text-sm")}
                  >
                    {t(`career.items.${item.id}.description`)}
                  </p>
                )}

                {item.stacks?.length > 0 && (
                  <div className={cn("flex flex-wrap gap-2 justify-start")}>
                    {item.stacks.map((stack, i) => (
                      <Badge key={stack} skill={stack} index={i} />
                    ))}
                  </div>
                )}
              </div>
            }
          />
        </div>
      </div>

      <div
        className={cn(
          "absolute top-2 -left-[7px] md:left-1/2 md:-translate-x-1/2 z-20",
        )}
      >
        <div
          className={cn(
            "relative w-4 h-4 rounded-full border-4 border-neutral-800 bg-primary-700",
          )}
        >
          {item.isCurrent && (
            <div
              className={cn(
                "absolute inset-0 rounded-full bg-primary-100 animate-pulse",
              )}
            />
          )}
        </div>
      </div>

      <motion.div
        {...motionProps}
        className={cn(
          "flex items-start flex-col gap-y-1 md:w-[50%]",
          isLeft ? "md:items-start" : "md:items-end",
        )}
      >
        <h2
          className={cn(
            "text-white leading-none text-nowrap font-medium text-xl",
          )}
        >
          {new Date(item.startDate).toLocaleDateString(
            language === "pt" ? "pt-BR" : "en-US",
            { month: "long", year: "numeric" },
          )}
        </h2>
        <p className={cn("text-neutral-400 font-medium")}>
          {item.isCurrent
            ? t("career.current")
            : item.endDate
              ? new Date(item.endDate).toLocaleDateString(
                  language === "pt" ? "pt-BR" : "en-US",
                  { month: "short", year: "numeric" },
                )
              : t("career.unknownEnd")}
        </p>
      </motion.div>
    </div>
  );
};

export default CareerCard;
