import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-6 lg:px-12 py-20"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <p className="text-blue-400 text-sm mb-4 font-mono">
            04. What's Next?
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-200 mb-6">
            Get In Touch
          </h2>
        </div>

        <p className="text-slate-400 leading-relaxed mb-12">
          I'm currently looking for new opportunities and my inbox is always
          open. Whether you have a question or just want to say hi, I'll try my
          best to get back to you!
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rafhhitosis@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border border-blue-400 text-blue-400 rounded-md hover:bg-blue-400/10 transition-all duration-200 font-mono"
          >
            Say Hello
          </a>
          <a
            href="/CV_RafhHitosis.pdf"
            download="CV_RafhHitosis.pdf"
            className="inline-block px-8 py-4 border border-blue-400 text-blue-400 rounded-md hover:bg-blue-400/10 transition-all duration-200 font-mono"
          >
            View CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
