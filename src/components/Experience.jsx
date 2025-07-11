import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Web Development Intern",
      company: "MWeeb Inc.",
      period: "Jan 2025 - Apr 2025",
      description:
        "Built landing pages and contributed to client projects. Gained experience in modern web development practices.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "React"],
    },
  ];

  return (
    <section id="experience" className="min-h-screen px-6 lg:px-12 py-20">
      <div className="max-w-4xl">
        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-bold text-slate-200 mr-4">
            <span className="text-blue-400 text-xl mr-2">02.</span>
            Where I've Worked
          </h2>
          <div className="flex-1 h-px bg-slate-700 ml-4"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="flex flex-col lg:flex-row lg:items-center mb-4">
                <h3 className="text-xl font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">
                  {exp.title}{" "}
                  <span className="text-blue-400">@ {exp.company}</span>
                </h3>
                <span className="text-sm text-slate-400 lg:ml-auto font-mono">
                  {exp.period}
                </span>
              </div>
              <p className="text-slate-400 mb-4 leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-400/10 text-blue-400 rounded-full text-sm font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
