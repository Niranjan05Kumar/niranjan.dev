import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { aboutPortfolio } from "../data";

const AboutPort = ({ showAbout }) => {
  return (
    <AnimatePresence>
      {showAbout && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute left-1/2 bottom-[80px] md:bottom-[90px] -translate-x-1/2 w-[90vw] sm:w-[520px] h-[300px] overflow-y-scroll px-[5vw] sm:px-[36px] py-8 rounded-xl bg-bg text-text border-2 border-border-dark flex flex-col items-start"
        >
          <h3 className="text-2xl font-semibold mb-4">Under the Hood</h3>
          {aboutPortfolio.map((section, idx) => (
            <div key={idx} className="mb-6">
              <h4 className="text- font-semibold text-text mb-2 flex justify-start">
                {section.title}
              </h4>
              <ul className="list-none text-text-muted flex flex-col items-start gap-2">
                {section.items.map((item, i) => (
                  <li key={i} className="text-start text-sm flex gap-3 items-center justify-start"><p className="h-[8px] w-[8px] bg-text rounded-full"></p>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AboutPort;
