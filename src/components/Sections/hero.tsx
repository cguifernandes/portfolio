import { motion } from "framer-motion";
import { useI18n } from "../../i18n/useI18n";
import {
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  projects,
} from "../../utils/utils";
import { GridBackdrop } from "../backdrops";
import BlurText from "../blur-text";
import Button from "../button";
import type { CodeLine } from "../code-window";
import CodeWindow from "../code-window";
import Container from "../container";

const TITLE_DELAY = 50;

// Ordem e tipo de cada linha do objeto. As chaves e os valores de texto vem
// do i18n; "projects" e calculado e as linhas "link" vem do LINKS abaixo.
const CODE_FIELDS = [
  { id: "name", kind: "string" },
  { id: "role", kind: "string" },
  { id: "projects", kind: "number" },
  { id: "based", kind: "string" },
  { id: "focus", kind: "array" },
  { id: "stack", kind: "array" },
  { id: "database", kind: "array" },
  { id: "education", kind: "string" },
  { id: "github", kind: "link" },
  { id: "linkedin", kind: "link" },
  { id: "email", kind: "link" },
] as const;

// valores das linhas clicaveis: texto curto para caber no card, href real
const LINKS: Record<string, { value: string; href: string }> = {
  github: { value: "github.com/cguifernandes", href: GITHUB_URL },
  linkedin: { value: "in/guilherme-fernandes", href: LINKEDIN_URL },
  email: { value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
};

const Hero = () => {
  const { t } = useI18n();

  const numbers: Record<string, number> = {
    projects: projects.length,
  };

  const codeLines: CodeLine[] = CODE_FIELDS.map(({ id, kind }) => {
    const key = t(`hero.code.lines.${id}.key`);
    const raw = t(`hero.code.lines.${id}.value`);

    if (kind === "number") return { key, kind, value: numbers[id] ?? 0 };
    if (kind === "link") return { key, kind, ...LINKS[id] };
    if (kind === "array") return { key, kind, value: raw.split(", ") };
    return { key, kind, value: raw };
  });

  // overflow-hidden na section: o brilho de 620px abaixo passa da borda da
  // tela no mobile e, sem o corte, a pagina inteira ganha scroll lateral
  return (
    <Container
      id="hero"
      sectionClassName="py-20 md:py-32 overflow-hidden"
      backdrop={<GridBackdrop />}
    >
      <div className="relative flex w-full flex-col items-center lg:items-start">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-[44%] h-[620px] w-[620px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(12, 145, 172, 0.16), transparent 62%)",
          }}
        />

        <div className="relative mt-16 flex w-full flex-col items-center justify-between gap-x-14 gap-y-12 pt-10 lg:flex-row lg:items-center">
          <div className="flex max-w-[68ch] lg:items-start items-center flex-col gap-y-8">
            <BlurText
              as="h1"
              text={t("hero.title")}
              delay={TITLE_DELAY}
              className="relative block text-center font-bold text-3xl text-white leading-[0.94] tracking-[-0.045em] sm:text-4xl lg:text-left lg:text-5xl"
            />

            <motion.p
              initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center text-neutral-400 text-sm lg:text-left md:text-base"
            >
              {t("hero.description")}
            </motion.p>
            <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
              <Button
                patternClassName="w-full sm:w-fit! flex"
                theme="primary"
                href={`mailto:${CONTACT_EMAIL}`}
                className="sm:w-fit! sm:min-w-52"
                animated
              >
                {t("hero.ctaContact")}
              </Button>

              <Button
                patternClassName="w-full sm:w-fit! flex"
                theme="outline"
                href="#projects"
                className="sm:w-fit! sm:min-w-52"
                animated
              >
                {t("hero.ctaProjects")}
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="w-full max-w-md shrink-0"
          >
            <CodeWindow fileName={t("hero.code.file")} lines={codeLines} />
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
