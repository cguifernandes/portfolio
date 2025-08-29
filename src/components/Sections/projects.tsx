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
        <h1 className="text-white text-center text-xl">Projetos</h1>
        <h2 className="text-white text-center text-lg">Empresas Atendidas</h2>
        <InfiniteScroll>
          {[...companies, ...companies, ...companies].map((company, index) => (
            <CompanyCard
              name={company.name}
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
