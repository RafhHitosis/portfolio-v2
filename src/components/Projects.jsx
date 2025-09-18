import React from "react";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Expense Tracker Web App",
      description:
        "An expense tracker web application that enables users to manage budgets, add expenses, set financial goals, and track spending efficiently.",
      technologies: [
        "Html",
        "Tailwind CSS",
        "JavaScript",
        "React",
        "Firebase",
        "Claude AI",
      ],
      github: "https://github.com/RafhHitosis/budgetwise",
      live: "https://kinsenas.netlify.app/",
    },
    {
      title: "Loan Tracker Web App",
      description:
        "A simple loan tracker web application built with React, optimized for mobile UI, that allows users to add loans, view payment breakdowns, and get indicators for upcoming due dates.",
      technologies: ["Html", "Tailwind CSS", "JavaScript", "React", "Firebase"],
      github: "https://github.com/RafhHitosis/loan-webApp.git",
      live: "https://ioyou.netlify.app/",
    },
    {
      title: "Calculator Android App",
      description:
        "A simple standard calculator app for Android, built with Java in Android Studio, featuring local history saving for privacy using Room (SQLite) database.",
      technologies: ["Java", "Android Studio", "Room (SQLite)"],
      github: "https://github.com/RafhHitosis/calQ.git",
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-6 lg:px-12 py-20">
      <div className="max-w-6xl">
        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-bold text-slate-200 mr-4">
            <span className="text-blue-400 text-xl mr-2">03.</span>
            Some Things I've Built
          </h2>
          <div className="flex-1 h-px bg-slate-700 ml-4"></div>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-200 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-400/10 text-blue-400 rounded-full text-sm font-mono"
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
