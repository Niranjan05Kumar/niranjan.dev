import ProjectCard from "./ProjectCard";
import { projects } from "../data";

export default function ProjectsSection() {
  return (
    <section className="px-[5vw] lg:px-[15vw] flex flex-col gap-(--gap4) mt-(--margin7) mb-(--margin6) ">
      <div>
        <h2 className="text-4xl font-semibold text-text">Projects</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-(--gap3)">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}
