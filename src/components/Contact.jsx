import React from "react";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();

  return (
    <section
      id="contact"
      className={`min-h-screen flex items-center px-6 lg:px-12 py-20 transition-colors duration-300 ${
        theme === "dark" ? "bg-transparent" : "bg-slate-50"
      }`}
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <p
            className={`text-sm mb-4 font-mono ${
              theme === "dark" ? "text-blue-400" : "text-blue-600"
            }`}
          >
            04. What's Next?
          </p>
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-6 transition-colors ${
              theme === "dark" ? "text-slate-200" : "text-slate-800"
            }`}
          >
            Get In Touch
          </h2>
        </div>

        <p
          className={`leading-relaxed mb-12 transition-colors ${
            theme === "dark" ? "text-slate-400" : "text-slate-600"
          }`}
        >
          I'm currently looking for new opportunities and my inbox is always
          open. Whether you have a question or just want to say hi, I'll try my
          best to get back to you!
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rafhhitosis@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block px-8 py-4 border rounded-md font-mono transition-all duration-200 ${
              theme === "dark"
                ? "border-blue-400 text-blue-400 hover:bg-blue-400/10"
                : "border-blue-600 text-blue-600 hover:bg-blue-100"
            }`}
          >
            Say Hello
          </a>
          <a
            href="/CV_RafhHitosis.pdf"
            download="CV_RafhHitosis.pdf"
            className={`inline-block px-8 py-4 border rounded-md font-mono transition-all duration-200 ${
              theme === "dark"
                ? "border-blue-400 text-blue-400 hover:bg-blue-400/10"
                : "border-blue-600 text-blue-600 hover:bg-blue-100"
            }`}
          >
            View CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
