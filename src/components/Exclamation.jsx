import { motion } from "motion/react";

const Exclamation = ({text}) => {
  return (
    <motion.p
      className="text-text"
      animate={{ y: [0, -6, 0],
        scale: [1, 1.4, 1]
       }}
      transition={{
        duration: 1.3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      {text}
    </motion.p>
  );
};

export default Exclamation;
