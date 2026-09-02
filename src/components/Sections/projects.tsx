import { motion } from "framer-motion";
import { useI18n } from "../../i18n/useI18n";
import { companies, projects } from "../../utils/utils";
import { GridBackdrop } from "../backdrops";
import CompanyCard from "../company-card";
import Container from "../container";
import ProjectCard from "../project-card";

const Projects = () => {
  const { t } = useI18n();

  return (
    <Container
      backdrop={<GridBackdrop />}
      id="projects"
      sectionClassName="px-0"
      className="overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-wrap items-baseline justify-between gap-5 px-6 lg:px-12"
      >
        <span className="text-primary-500 text-xs uppercase tracking-[0.13em]">
          {t("projects.label")}
        </span>
        <h1 className="text-2xl text-white leading-[1.4] tracking-[-0.02em]">
          {t("projects.title")}
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            index={index}
            id={project.id}
            description={project.description}
            image={project.image}
            name={project.name}
            skills={project.skills}
            additionalLink={project.additionalLink}
            repo={project.repo}
            website={project.website}
          />
        ))}
      </div>

      <div className="flex flex-col gap-y-5 px-6 pt-6 lg:px-10">
        <motion.span
          initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-neutral-500 text-xs uppercase tracking-[0.07em]"
        >
          {t("projects.companiesTitle")}
        </motion.span>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {companies.map((company, index) => (
            <CompanyCard
              key={company.name}
              index={index}
              name={company.name}
              image={company.image}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Projects;
