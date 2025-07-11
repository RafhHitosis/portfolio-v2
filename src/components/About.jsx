import React from "react";

const About = (props) => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 lg:px-12 py-20"
    >
      <div className="max-w-4xl">
        <div className="mb-8">
          <p className="text-blue-400 text-sm mb-4 font-mono">Hi, my name is</p>
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-200 mb-4">
            Rafh Hitosis.
          </h1>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-400 mb-6">
            I build things for the web.
          </h2>
        </div>

        <div className="max-w-2xl space-y-4 text-slate-400 leading-relaxed">
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
            className="px-8 py-4 border border-blue-400 text-blue-400 rounded-md hover:bg-blue-400/10 transition-all duration-200 font-mono"
          >
            Check out my work!
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
