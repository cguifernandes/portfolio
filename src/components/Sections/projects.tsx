import { motion } from "framer-motion";
import { companies, projects } from "../../utils/utils";
import CompanyCard from "../company-card";
import InfiniteScroll from "../infinite-scroll";
import ProjectCard from "../project-card";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 scroll-mt-8 flex justify-center w-full"
    >
      <div className="flex flex-col overflow-hidden gap-y-10 max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-white text-center text-xl"
        >
          Projetos
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-white text-center text-lg"
        >
          Empresas Atendidas
        </motion.h2>
        <InfiniteScroll>
          {[...companies, ...companies, ...companies].map((company, index) => (
            <CompanyCard
              name={company.name}
              index={index}
              image={company.image}
              key={index}
            />
          ))}
        </InfiniteScroll>
        <div className="flex px-6 lg:px-12 flex-col gap-y-20">
          {projects.map((skill, index) => (
            <ProjectCard
              description={skill.description}
              image={skill.image}
              name={skill.name}
              skills={skill.skills}
              additionalLink={skill.additionalLink}
              repo={skill.repo}
              website={skill.website}
              reverse={index % 2 === 0}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
