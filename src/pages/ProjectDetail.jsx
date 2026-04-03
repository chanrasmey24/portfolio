import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) return <h1>Project not found</h1>;

  return (
    <div className="p-10 max-w-4xl mx-auto">

      <h1 className="text-4xl font-bold mb-6">
        {project.title}
      </h1>

      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="rounded-xl mb-6 border border-gray-700"
        />
      )}

      <p className="text-gray-400 mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t, i) => (
          <span key={i} className="bg-gray-700 px-3 py-1 rounded">
            {t}
          </span>
        ))}
      </div>

      <p className="text-gray-300 mb-8">
        {project.details}
      </p>

      <div className="flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:opacity-80"
          >
            GitHub
          </a>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-500"
          >
            Live Demo
          </a>
        )}
      </div>

    </div>
  );
}

export default ProjectDetail;