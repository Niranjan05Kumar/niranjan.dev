import { useEffect, useState } from "react";
import { Navbar, Hero, Education, Skills, Projects, Contact } from "./components";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);
  return (
    <div>
      <Navbar active={activeSection}/>
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
