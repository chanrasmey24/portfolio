import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  if (!project) return null; // 🔥 safety

  return (
    <Link to={`/project/${project.id}`}>
      <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden hover:scale-105 transition cursor-pointer">

        {/* Image (safe fallback) */}
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-40 object-cover"
          />
        ) : (
          <div className="w-full h-40 bg-gray-800 flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}

        <div className="p-6">
          <h3 className="text-xl font-semibold">
            {project.title}
          </h3>

          <p className="text-gray-400 mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech?.map((t, i) => (
              <span key={i} className="text-sm bg-gray-700 px-2 py-1 rounded">
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </Link>
  );
}

export default ProjectCard;