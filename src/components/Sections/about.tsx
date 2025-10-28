import { motion } from "framer-motion";
import BlurText from "../blur-text";
import Button from "../button";
import CardStarBorder from "../card-star-border";
import { BoxesIcon } from "../ui/boxes";
import { CoffeeIcon } from "../ui/coffee";
import { EarthIcon } from "../ui/earth";
import { GithubIcon } from "../ui/github";
import { LinkedinIcon } from "../ui/linkedin";
import { MailCheckIcon } from "../ui/mail-check";
import { PhoneIcon } from "../ui/phone";
import { TimerIcon } from "../ui/timer";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen pt-12 md:pb-16 flex-col max-w-7xl gap-y-8 items-center scroll-mt-8 px-6 lg:px-4 flex justify-center w-full"
    >
      <BlurText
        text="Guilherme Fernandes"
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
        Tenho uma grande paixão por criar sites e explorar novas tecnologias,
        sempre buscando novas maneiras de inovar e aprimorar minhas habilidades.
        Quando não estou codando, gosto de mergulhar na leitura de livros,
        assistir séries envolventes e dedicar um tempo para estudar e expandir
        meus conhecimentos.
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
        href="/curriculo.pdf"
        target="_blank"
        className="w-full lg:w-96"
        animated
      >
        Currículo
      </Button>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 grid-rows-2">
        <CardStarBorder
          icon={<BoxesIcon size={28} />}
          animated
          title="Design de interfaces"
          subtitle="Crio interfaces visuais modernas e intuitivas para sites, garantindo uma ótima experiência para os usuários. Meu objetivo é transformar ideias em layouts atraentes e funcionais, sempre focando em usabilidade e identidade visual."
        />
        <CardStarBorder
          icon={<CoffeeIcon size={28} />}
          animated
          title="Desenvolvimento web"
          subtitle="Desenvolvo sites e aplicações completas, cuidando tanto da parte visual quanto da lógica por trás do funcionamento. Utilizo tecnologias modernas para criar sites rápidos, seguros e escaláveis."
        />
        <CardStarBorder
          icon={<TimerIcon size={28} />}
          animated
          title="Otimização e manutenção de sites"
          subtitle="Garanto que seu site esteja sempre rápido, seguro e atualizado. Faço otimizações de desempenho, melhorias em SEO para evitar problemas e garantir a melhor experiência para os visitantes."
        />
        <CardStarBorder
          icon={<EarthIcon size={28} />}
          animated
          title="Criação de sites com WordPress"
          subtitle="Construo sites profissionais e personalizados utilizando WordPress. Desde blogs até sites empresariais, entrego soluções flexíveis, responsivas e fáceis de gerenciar, garantindo que seu projeto tenha um ótimo desempenho online."
        />
      </div>
    </section>
  );
};

export default About;
