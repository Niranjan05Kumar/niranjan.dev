"use client";
import { motion } from "framer-motion";
import { LuExternalLink } from "react-icons/lu";

const ProjectCard = ({
  id,
  title,
  description,
  image,
  techs,
  highlights,
  live,
  github,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, easing: "easeInOut" }}
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="h-auto rounded-xl bg-bg-light border-2 border-border-light shadow-[0_5px_10px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col"
    >
      <div className="h-[180px] w-full">
        <img src={image} alt={title} className="h-[100%] w-full object-cover" />
      </div>
      <div className="w-full h-full p-(--padding4) flex flex-col gap-(--gap)">
        <div className="w-full h-full flex flex-col gap-(--gap)">
          <h3 className="text-xl font-semibold text-text">{title}</h3>
          <p className="text-sm text-text-muted w-full">{description}</p>
          <div className="flex w-full flex-wrap gap-[6px]">
            {techs.map((tech, ind) => (
              <h5
                key={ind}
                className="bg-bg text-sm text-text-muted px-3 py-[2px] rounded-full border-1 border-(--border-light) flex justify-center"
              >
                {tech}
              </h5>
            ))}
          </div>
          <div className="flex flex-col w-full">
            {highlights.map((highlight, ind) => (
              <h5
                key={ind}
                className="text-md text-text py-[2px] flex items-center gap-(--gap2)"
              >
                <p className="bg-text w-2 h-2 rounded-full"></p>
                {highlight}
              </h5>
            ))}
          </div>
        </div>

        <div className="flex gap-(--gap2) mt-auto">
          <a
            href={live}
            className="text-bg bg-text hover:bg-text-muted duration-500 px-[12px] py-[5px] rounded-sm flex gap-(--gap) items-center"
            target="_blank"
          >
            <LuExternalLink className="text-bg-dark" /> Live
          </a>
          <a
            href={github}
            className="text-text bg-bg-light hover:bg-bg duration-500 outline-2 outline-(--border-light) rounded-sm px-[12px] py-[5px]"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
