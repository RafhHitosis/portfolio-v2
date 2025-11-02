import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Nav = (props) => {
  const { theme } = useTheme();

  return (
    <nav
      className={`fixed left-0 top-0 h-full w-80 border-r p-8 transform transition-transform duration-300 z-40 ${
        props.isMenuOpen
          ? "translate-x-0"
          : "-translate-x-full lg:translate-x-0"
      } ${
        theme === "dark"
          ? "bg-slate-800/50 border-slate-700 text-slate-200"
          : "bg-white/80 border-slate-200 text-slate-800"
      } backdrop-blur-sm`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-12">
          <h1
            className={`text-4xl font-bold mb-2 ${
              theme === "dark" ? "text-white" : "text-slate-800"
            }`}
          >
            rdev {"</>"}
          </h1>
          <h2
            className={`text-xl mb-4 ${
              theme === "dark" ? "text-blue-400" : "text-blue-500"
            }`}
          >
            Frontend Web Developer
          </h2>
          <p
            className={`text-sm leading-relaxed ${
              theme === "dark" ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Still learning, focused on building accessible websites.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex-1">
          {props.navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => props.scrollToSection(item.id)}
              className={`flex items-center w-full py-3 px-4 mb-2 text-left transition-all duration-200 rounded-md group cursor-pointer ${
                props.activeSection === item.id
                  ? "bg-blue-500/10 text-blue-400"
                  : theme === "dark"
                  ? "hover:bg-slate-700/50 hover:text-white"
                  : "hover:bg-blue-500/10 hover:text-blue-400"
              }`}
            >
              <span
                className={`text-xs mr-4 ${
                  props.activeSection === item.id
                    ? "text-blue-400"
                    : theme === "dark"
                    ? "text-slate-500"
                    : "text-slate-500"
                }`}
              >
                {item.number}
              </span>
              <span className="font-medium tracking-wider uppercase text-sm">
                {item.label}
              </span>
              <div
                className={`ml-auto w-8 h-px transition-all duration-200 ${
                  props.activeSection === item.id
                    ? "w-12 bg-blue-500"
                    : theme === "dark"
                    ? "bg-slate-600 group-hover:w-12 group-hover:bg-slate-400"
                    : "bg-slate-200 group-hover:w-12 group-hover:bg-blue-400"
                }`}
              ></div>
            </button>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mt-8">
          <a
            href="https://github.com/RafhHitosis"
            className={`transition-colors ${
              theme === "dark"
                ? "text-slate-400 hover:text-blue-400"
                : "text-slate-500 hover:text-blue-500"
            }`}
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/rafhhitosis/"
            className={`transition-colors ${
              theme === "dark"
                ? "text-slate-400 hover:text-blue-400"
                : "text-slate-500 hover:text-blue-500"
            }`}
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:rafhhitosis@gmail.com"
            className={`transition-colors ${
              theme === "dark"
                ? "text-slate-400 hover:text-blue-400"
                : "text-slate-500 hover:text-blue-500"
            }`}
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
