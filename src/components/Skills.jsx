import React from "react";
import { skills } from "../data";
import Dock from "../blocks/Components/Dock";
import { motion } from "motion/react";

const Skills = () => {
  return (
    <section id="skills" className="px-[5vw] lg:px-[15vw] flex flex-col gap-(--gap4) mb-(--margin6) ">
      <div>
        <h2 className="text-4xl font-semibold text-text">Skills</h2>
      </div>

      <div className="flex flex-col gap-(--gap4) w-full">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-start gap-(--gap2)"
          >
            <motion.h3
              whileHover={{
                translateX: 5,
              }}
              className="text-text-muted text-xl font-semibold w-full flex items-center"
            >
              <p className="w-[3px] h-4 bg-text rounded-full mr-3"></p>
              {skill.type}
            </motion.h3>
            <Dock
              items={skill.skillinfo}
              className={"bottom-5 text-xl items-center"}
              distance={10}
              panelHeight={"fit"}
              baseItemSize={60}
              dockHeight={0}
              magnification={70}
              spring={{ mass: 0.1, stiffness: 150, damping: 12 }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
