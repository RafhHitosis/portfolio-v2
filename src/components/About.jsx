import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const About = (props) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <section
      id="about"
      className={`relative min-h-screen flex items-center px-6 lg:px-12 py-20 transition-colors duration-300 ${
        theme === "dark" ? "bg-transparent" : "bg-slate-50"
      }`}
    >
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`absolute top-8 right-8 p-2 rounded-md transition-all shadow-sm cursor-pointer ${
          theme === "dark"
            ? "bg-slate-800 hover:bg-slate-700 text-slate-200"
            : "bg-slate-200 hover:bg-slate-300 text-blue-600"
        }`}
      >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      <div className="max-w-4xl">
        <div className="mb-8">
          <p
            className={`text-sm mb-4 font-mono ${
              theme === "dark" ? "text-blue-400" : "text-blue-600"
            }`}
          >
            Hi, my name is
          </p>

          <h1
            className={`text-5xl lg:text-7xl font-bold mb-4 transition-colors ${
              theme === "dark" ? "text-slate-200" : "text-slate-800"
            }`}
          >
            Rafh Hitosis.
          </h1>

          <h2
            className={`text-4xl lg:text-6xl font-bold mb-6 transition-colors ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}
          >
            I build things for the web.
          </h2>
        </div>

        <div
          className={`max-w-2xl space-y-4 leading-relaxed transition-colors ${
            theme === "dark" ? "text-slate-400" : "text-slate-600"
          }`}
        >
          <p>
            I’m a passionate and motivated frontend web developer with a strong
            foundation in web technologies. I recently graduated with a degree
            in Information Technology and enjoy building clean, user-friendly
            websites that are easy to use and understand.
          </p>
          <p>
            I'm always learning new things to improve my skills, whether it’s
            through exploring new tools, working on small projects, or keeping
            up with trends in web development. My goal is to create websites
            that not only look good but also work well for everyone.
          </p>
        </div>

        <div className="mt-12">
          <button
            onClick={() => props.scrollToSection("projects")}
            className={`px-8 py-4 border rounded-md font-mono cursor-pointer transition-all duration-200 ${
              theme === "dark"
                ? "border-blue-400 text-blue-400 hover:bg-blue-400/10"
                : "border-blue-600 text-blue-600 hover:bg-blue-100"
            }`}
          >
            Check out my work!
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
