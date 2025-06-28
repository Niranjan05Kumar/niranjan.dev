import React from "react";
import { skills } from "../data";
import HeadingH2 from "./HeadingH2";
import Dock from "../blocks/Components/Dock";
import { motion } from "motion/react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-[5vw] lg:px-[15vw] flex flex-col gap-[60px] mb-(--margin6) "
    >
      <div>
        <HeadingH2 heading="Skills" />
      </div>

      <div className="flex flex-col gap-(--gap4) w-full">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-start gap-(--gap2)"
          >
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, easing: "easeInOut" }}
              viewport={{ once: true, amount: 0.8 }}
              whileHover={{
                translateX: 5,
              }}
              className="text-text-muted text-xl font-semibold w-full flex items-center"
            >
              <p className="w-[3px] h-4 bg-text rounded-full mr-3"></p>
              {skill.type}
            </motion.h3>
            <Dock items={skill.skillinfo} className={"text-xl items-center"} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
