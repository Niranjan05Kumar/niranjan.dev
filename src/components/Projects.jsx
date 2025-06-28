import ProjectCard from "./ProjectCard";
import HeadingH2 from "./HeadingH2";
import { projects } from "../data";
import {motion} from "motion/react";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="px-[5vw] lg:px-[15vw] flex flex-col gap-[60px] mt-(--margin7) mb-(--margin6) "
    >
      <div>
        <HeadingH2 heading="Projects" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-(--gap3)">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}
