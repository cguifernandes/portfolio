import { motion } from "framer-motion";
import { useCallback, useRef } from "react";
import { useI18n } from "../../i18n/useI18n";
import BlurText from "../blur-text";
import Button from "../button";
import CardStarBorder from "../card-star-border";
import { BoxesIcon, BoxesIconHandle } from "../ui/boxes";
import { CoffeeIcon, CoffeeIconHandle } from "../ui/coffee";
import { EarthIcon, EarthIconHandle } from "../ui/earth";
import { GithubIcon } from "../ui/github";
import { LinkedinIcon } from "../ui/linkedin";
import { MailCheckIcon } from "../ui/mail-check";
import { PhoneIcon } from "../ui/phone";
import { TimerIcon, TimerIconHandle } from "../ui/timer";

const About = () => {
  const { t, language } = useI18n();
  const isPortuguese = language === "pt";
  const earthIconRef = useRef<EarthIconHandle>(null);
  const boxesIconRef = useRef<BoxesIconHandle>(null);
  const coffeeIconRef = useRef<CoffeeIconHandle>(null);
  const timerIconRef = useRef<TimerIconHandle>(null);

  const handleBoxesViewportEnter = useCallback(() => {
    boxesIconRef.current?.startAnimation();
  }, []);

  const handleCoffeeViewportEnter = useCallback(() => {
    coffeeIconRef.current?.startAnimation();
  }, []);

  const handleTimerViewportEnter = useCallback(() => {
    timerIconRef.current?.startAnimation();
  }, []);

  const handleEarthViewportEnter = useCallback(() => {
    earthIconRef.current?.startAnimation();
  }, []);

  return (
    <section
      id="about"
      className="py-20 flex-col max-w-7xl gap-y-8 items-center scroll-mt-8 px-6 lg:px-4 flex justify-center w-full"
    >
      <div className="flex items-center flex-col pb-10 gap-y-4">
        <BlurText
          text={t("about.title")}
          delay={50}
          className="md:text-5xl text-3xl sm:text-4xl text-white font-bold text-center"
        />
        <motion.p
          initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-neutral-400 text-sm md:text-base text-center w-full"
        >
          {t("about.description")}
        </motion.p>

        <ul className="flex items-center gap-x-6">
          <motion.li
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <a
              href="mailto:gui.adfer@gmail.com"
              className="rounded-lg cursor-pointer flex duration-300 ease-in-out group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MailCheckIcon
                size={24}
                className="text-white duration-300 ease-in-out group group-hover:text-primary-500"
              />
            </a>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          >
            <a
              href="https://wa.me/5511912345678"
              className="rounded-lg cursor-pointer flex duration-300 ease-in-out group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PhoneIcon
                size={24}
                className="text-white duration-300 ease-in-out group group-hover:text-primary-500"
              />
            </a>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <a
              href="https://www.linkedin.com/in/guilherme-fernandes-6b1353243/"
              className="rounded-lg cursor-pointer flex duration-300 ease-in-out group"
            >
              <LinkedinIcon
                size={24}
                className="text-white duration-300 ease-in-out group group-hover:text-primary-500"
              />
            </a>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
          >
            <a
              href="https://github.com/cguifernandes"
              className="rounded-lg cursor-pointer flex duration-300 ease-in-out group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon
                size={24}
                className="text-white duration-300 ease-in-out group group-hover:text-primary-500"
              />
            </a>
          </motion.li>
        </ul>

        <Button
          patternClassName="w-full flex justify-center"
          theme="primary"
          href={isPortuguese ? "/curriculo.pdf" : "/resume.pdf"}
          target="_blank"
          className="w-full lg:w-96"
          animated
        >
          {t("about.cta")}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 grid-rows-2">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          onViewportEnter={handleBoxesViewportEnter}
        >
          <CardStarBorder
            icon={<BoxesIcon ref={boxesIconRef} size={22} />}
            animated
            title={t("about.cards.interfaces.title")}
            subtitle={t("about.cards.interfaces.subtitle")}
            onMouseEnter={() => boxesIconRef.current?.startAnimation()}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          onViewportEnter={handleCoffeeViewportEnter}
        >
          <CardStarBorder
            icon={<CoffeeIcon ref={coffeeIconRef} size={22} />}
            animated
            title={t("about.cards.web.title")}
            subtitle={t("about.cards.web.subtitle")}
            onMouseEnter={() => coffeeIconRef.current?.startAnimation()}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          onViewportEnter={handleTimerViewportEnter}
        >
          <CardStarBorder
            icon={<TimerIcon ref={timerIconRef} size={22} />}
            animated
            title={t("about.cards.optimization.title")}
            subtitle={t("about.cards.optimization.subtitle")}
            onMouseEnter={() => timerIconRef.current?.startAnimation()}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          onViewportEnter={handleEarthViewportEnter}
        >
          <CardStarBorder
            icon={<EarthIcon ref={earthIconRef} size={22} />}
            animated
            title={t("about.cards.wordpress.title")}
            subtitle={t("about.cards.wordpress.subtitle")}
            onMouseEnter={() => earthIconRef.current?.startAnimation()}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
