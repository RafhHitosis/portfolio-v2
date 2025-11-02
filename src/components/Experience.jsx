import React from "react";
import { useTheme } from "../context/ThemeContext";

const Experience = () => {
  const { theme } = useTheme();

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
    <section
      id="experience"
      className={`min-h-screen px-6 lg:px-12 py-20 ${
        theme === "dark" ? "bg-transparent" : "bg-slate-50"
      }`}
    >
      <div className="max-w-4xl">
        <div className="flex items-center mb-12">
          <h2
            className={`text-3xl font-bold mr-4 ${
              theme === "dark" ? "text-slate-200" : "text-slate-800"
            }`}
          >
            <span
              className={`text-xl mr-2 ${
                theme === "dark" ? "text-blue-400" : "text-blue-600"
              }`}
            >
              02.
            </span>
            Where I've Worked
          </h2>
          <div
            className={`flex-1 h-px ml-4 ${
              theme === "dark" ? "bg-slate-700" : "bg-slate-300"
            }`}
          ></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="flex flex-col lg:flex-row lg:items-center mb-4">
                <h3
                  className={`text-xl font-semibold transition-colors ${
                    theme === "dark"
                      ? "text-slate-200 group-hover:text-blue-400"
                      : "text-slate-800 group-hover:text-blue-600"
                  }`}
                >
                  {exp.title}{" "}
                  <span
                    className={`${
                      theme === "dark" ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    @ {exp.company}
                  </span>
                </h3>
                <span
                  className={`text-sm lg:ml-auto font-mono ${
                    theme === "dark" ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {exp.period}
                </span>
              </div>

              <p
                className={`mb-4 leading-relaxed ${
                  theme === "dark" ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-3 py-1 rounded-full text-sm font-mono ${
                      theme === "dark"
                        ? "bg-blue-400/10 text-blue-400"
                        : "bg-blue-100 text-blue-700"
                    }`}
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
