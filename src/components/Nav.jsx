import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Nav = (props) => {
  return (
    <nav
      className={`fixed left-0 top-0 h-full w-80 bg-slate-800/50 backdrop-blur-sm border-r border-slate-700 p-8 transform transition-transform duration-300 z-40 ${
        props.isMenuOpen
          ? "translate-x-0"
          : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">rdev {"</>"}</h1>
          <h2 className="text-xl text-blue-400 mb-4">Frontend Web Developer</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
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
                  : "hover:bg-slate-700/50 hover:text-white"
              }`}
            >
              <span
                className={`text-xs mr-4 ${
                  props.activeSection === item.id
                    ? "text-blue-400"
                    : "text-slate-500"
                }`}
              >
                {item.number}
              </span>
              <span className="font-medium tracking-wider uppercase text-sm">
                {item.label}
              </span>
              <div
                className={`ml-auto w-8 h-px bg-slate-600 transition-all duration-200 ${
                  props.activeSection === item.id
                    ? "w-12 bg-blue-400"
                    : "group-hover:w-12 group-hover:bg-slate-400"
                }`}
              ></div>
            </button>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mt-8">
          <a
            href="https://github.com/RafhHitosis"
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/rafhhitosis/"
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:rafhhitosis@gmail.com"
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
