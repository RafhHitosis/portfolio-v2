import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import projects from "../data/projects";

const Projects = () => {
  const { theme } = useTheme();

  return (
    <section
      id="projects"
      className={`min-h-screen px-6 lg:px-12 py-20 transition-colors duration-300 ${
        theme === "dark" ? "bg-transparent" : "bg-slate-50"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
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
              03.
            </span>
            Some Things I've Built
          </h2>
          <div
            className={`flex-1 h-px ml-4 ${
              theme === "dark" ? "bg-slate-700" : "bg-slate-300"
            }`}
          ></div>
        </div>

        {/* Project List */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div
                className={`rounded-lg p-8 transition-all duration-300 hover:-translate-y-1 ${
                  theme === "dark"
                    ? "bg-slate-800/50 hover:bg-slate-800/70"
                    : "bg-white hover:bg-slate-100 shadow-sm"
                }`}
              >
                {/* Project Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className={`text-2xl font-bold transition-colors ${
                      theme === "dark"
                        ? "text-slate-200 group-hover:text-blue-400"
                        : "text-slate-800 group-hover:text-blue-600"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors cursor-pointer ${
                        theme === "dark"
                          ? "text-slate-400 hover:text-blue-400"
                          : "text-slate-500 hover:text-blue-600"
                      }`}
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors cursor-pointer ${
                        theme === "dark"
                          ? "text-slate-400 hover:text-blue-400"
                          : "text-slate-500 hover:text-blue-600"
                      }`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p
                  className={`mb-6 leading-relaxed ${
                    theme === "dark" ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
