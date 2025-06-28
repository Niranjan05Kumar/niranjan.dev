import React from "react";
import { motion } from "motion/react";

const HeadingH2 = ({heading}) => {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, easing: "easeInOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="text-4xl font-semibold text-text"
    >
      {heading}
    </motion.h2>
  );
};

export default HeadingH2;
