import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Nav from "./components/Nav";

const App = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = React.useMemo(
    () => [
      { id: "about", label: "About", number: "01" },
      { id: "experience", label: "Experience", number: "02" },
      { id: "projects", label: "Projects", number: "03" },
      { id: "contact", label: "Contact", number: "04" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-mono">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-6 left-6 z-50 lg:hidden p-2 bg-slate-800 rounded-md hover:bg-slate-700 transition-colors"
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Left Sidebar Navigation */}
      <Nav
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        activeSection={activeSection}
      />

      {/* Main Content */}
      <main className="lg:ml-80 min-h-screen">
        <About scrollToSection={scrollToSection} />

        <Experience />

        <Projects />

        <Contact />
      </main>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default App;
