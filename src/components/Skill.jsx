import { Server, Monitor, Database, Wrench, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Backend",
    icon: <Server size={28} />,
    skills: ["PHP (Laravel)", "Java (Spring Boot)", "Python", "REST APIs"]
  },
  {
    title: "Frontend",
    icon: <Monitor size={28} />,
    skills: ["HTML", "CSS", "JavaScript", "Blade", "Flutter"]
  },
  {
    title: "Database",
    icon: <Database size={28} />,
    skills: ["MySQL", "PostgreSQL", "Relational Design"]
  },
  {
    title: "Tools",
    icon: <Wrench size={28} />,
    skills: ["Git", "GitHub", "Streamlit", "Linux"]
  },
  {
    title: "Core Skills",
    icon: <Brain size={28} />,
    skills: ["System Analysis", "Data Structures", "Problem Solving"]
  }
];

export default function Skills() {
  return (
    <section id="skill" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-800"
            >
              <div className="flex items-center gap-3 mb-4 text-blue-400">
                {category.icon}
                <h3 className="text-xl font-semibold">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-2 text-gray-300">
                {category.skills.map((skill, i) => (
                  <li key={i}>• {skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}