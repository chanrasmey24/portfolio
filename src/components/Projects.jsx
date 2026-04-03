import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="py-24 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;