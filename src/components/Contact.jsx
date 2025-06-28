import React from "react";
import { socialMedia } from "../data";
import HeadingH2 from "./HeadingH2";
import { motion } from "motion/react";
import CopyIcon from "./CopyIcon";

const parentVariants = {
  hidden: { y: "50%", opacity:0 },
  visible: {
    y: 0,
    opacity:1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-[5vw] lg:px-[15vw] flex flex-col gap-[60px] mt-(--margin7) mb-(--margin6) "
    >
      <div>
        <HeadingH2 heading="Get In Touch" />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={parentVariants}
        className="flex flex-col gap-[24px]"
      >
        {socialMedia.map((social) => {
          const Icon = social.icon;
          return (
            <motion.div
              variants={itemVariants}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              key={social.id}
              className="group flex items-center justify-between"
            >
              <motion.div
                className="group flex flex-1 items-center gap-(--gap2)"
                whileHover={{
                  x: 8,
                  transition: { duration: 0.15 },
                }}
                whileTap={{
                  x: 8,
                  transition: { duration: 0.15 },
                }}
              >
                <div className="group w-[40px] h-[40px] flex justify-center items-center bg-bg-light group-hover:bg-bg group-hover:border-text duration-300 ease-in hover:text-text rounded-full border-2 border-(--border-light)">
                  <Icon className="w-6 h-6 text-text-muted group-hover:text-text transition-colors duration-300 ease-in" />
                </div>
                <a
                  onClick={social.onClick}
                  className="cursor-pointer text-text-muted group-hover:text-text hover:underline underline-offset-3 duration-300 transition-all"
                >
                  {social.label}
                </a>
              </motion.div>
              <CopyIcon text={social.link} />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Contact;
