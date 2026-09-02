import clsx from "clsx";
import { motion } from "framer-motion";
import portrait from "../../assets/guilherme.webp";
import { useI18n } from "../../i18n/useI18n";
import { DotsBackdrop } from "../backdrops";
import Container from "../container";

// Para trocar a foto: substitua o arquivo importado acima.
// Voltar ao placeholder hachurado: atribua null aqui.
const PORTRAIT: string | null = portrait;

const HATCH_BACKGROUND =
  "repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.055) 0 2px, transparent 2px 9px)";

const cardKeys = ["stack", "education", "languages", "postgrad"] as const;

const About = () => {
  const { t } = useI18n();

  return (
    <Container backdrop={<DotsBackdrop />} id="about" className="gap-y-4">
      <motion.span
        initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-primary-500 text-center lg:text-left text-xs uppercase tracking-widest"
      >
        {t("about.label")}
      </motion.span>

      <div className="flex flex-col lg:flex-row items-center gap-16 w-full">
        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-sm min-w-80 lg:max-w-none lg:h-max"
        >
          {PORTRAIT ? (
            <img
              src={PORTRAIT}
              alt={t("about.portraitAlt")}
              className="w-full aspect-4/5 lg:aspect-auto lg:h-full rounded-lg border border-neutral-800 object-cover"
            />
          ) : (
            <div
              className="w-full aspect-4/5 lg:aspect-auto lg:h-full rounded-lg border border-neutral-800 flex items-end p-4"
              style={{ backgroundImage: HATCH_BACKGROUND }}
            >
              <span className="text-neutral-500 text-xs uppercase tracking-[0.05em]">
                {t("about.portraitPlaceholder")}
              </span>
            </div>
          )}
        </motion.div>

        <div className="flex flex-col gap-y-8">
          <motion.p
            initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-white text-center lg:text-left text-2xl leading-[1.4] tracking-[-0.02em]"
          >
            {t("about.lead")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="text-neutral-400 text-center lg:text-left text-sm lg:text-base leading-[1.7]"
          >
            {t("about.body")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="grid grid-cols-2 gap-px bg-neutral-800 border border-neutral-800 rounded-lg overflow-hidden"
          >
            {cardKeys.map((key, index) => (
              <div
                key={key}
                className={clsx(
                  "bg-neutral-950 p-4 flex flex-col gap-y-1",
                  index === cardKeys.length - 1 &&
                    cardKeys.length % 2 === 1 &&
                    "col-span-2",
                )}
              >
                <span className="text-neutral-500 text-xs uppercase tracking-[0.07em]">
                  {t(`about.cards.${key}.label`)}
                </span>
                <span className="text-white text-sm">
                  {t(`about.cards.${key}.value`)}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default About;
