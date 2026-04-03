const educationData = [
  {
    school: "Setec Institute",
    degree: "Bachelor of Management Information Systems",
    period: "Expected Graduation: Dec 2026",
    gpa: "GPA: 3.3 / 4.00",
    image: "/images/setec.jpg"
  },
  {
    school: "SAS Stanford American School",
    degree: "General Chinese Program",
    image: "/images/sas.jpg"
  },
  {
    school: "Paññāsāstra University of Cambodia",
    degree: "Diploma & Certificate of Completion - GESL",
    image: "/images/puc.jpg"
  }
];

export default function AboutEducation() {
  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT: Education */}
        <div>
          <h2 className="text-3xl font-bold mb-10">
            Education
          </h2>

          <div className="relative border-l border-gray-700">
            {educationData.map((edu, index) => (
              <div key={index} className="mb-10 ml-6">
                
                {/* Timeline dot */}
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 mt-2"></div>

                <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 shadow-md">
                  
                  <img
                    src={edu.image}
                    alt={edu.school}
                    className="w-full h-32 object-cover rounded-md mb-3"
                  />

                  <h3 className="text-lg font-semibold">
                    {edu.school}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {edu.degree}
                  </p>

                  {edu.period && (
                    <p className="text-xs text-gray-500 mt-1">
                      {edu.period}
                    </p>
                  )}

                  {edu.gpa && (
                    <p className="text-xs text-blue-400 mt-1">
                      {edu.gpa}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: About Me */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            I’m a third-year Management Information Systems student focused on backend and full-stack development. I build real-world systems including e-commerce platforms, REST APIs, and data dashboards using technologies like Laravel, Spring Boot, and Python.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            My strength lies in designing structured systems, building clean backend logic, and working with relational databases. I enjoy turning ideas into functional applications that solve real problems.
          </p>

          <p className="text-gray-300 leading-relaxed">
            I’m currently seeking a software engineering or web development internship where I can apply my skills, contribute to real projects, and continue growing as a developer.
          </p>
        </div>

      </div>
    </section>
  );
}