"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const parentVariants = {
  hidden: { y: "50%" },
  visible: {
    y: 0,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y:20 },
  visible: { opacity: 1, y:0 },
};

export default function Dock({ items, className = "" }) {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    variants={parentVariants}
    viewport={{ once: true, amount: 0.8 }}
      className={`${className} grid grid-rows-auto grid-cols-[auto_auto_auto] sm:grid-cols-6 sm:grid-rows-1 items-center justify-start w-fit gap-3 rounded-2xl`}
    >
      {items.map((item, idx) => (
        <motion.div
        variants={itemVariants}
        viewport={{ once: true, amount: 0.8 }}
        className="flex flex-col w-fit items-start justify-center gap-[10px]">
          <motion.div
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{
              scale: 1.07,
              easing: "easeInOut",
            }}
            className={`relative z-10 h-[56px] w-[56px] flex items-center justify-center rounded-xl border-2 border-(--border-dark) p-[10px] bg-bg-light shadow-[0_4px_6px_rgba(0,0,0,0.25)] ${className}`}
          >
            <div className={`flex items-center justify-center w-full h-full`}>
              <img
                src={item.icon}
                alt={item.label}
                className="w-full h-full object-contain"
              />
            </div>
  
            <AnimatePresence>
              {hovered === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: -10 }}
                  exit={{ opacity: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute hidden sm:block -top-6 left-1/2 w-fit whitespace-nowrap rounded-md border-2 border-(--border-dark) bg-bg-dark px-2 py-0.5 text-xs text-text`}
                  style={{ x: "-50%" }}
                >
                  {item.label}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
            <motion.div
              className={`sm:hidden block min-w-[56px] text-center whitespace-nowrap rounded-md border-2 border-(--border-dark) bg-bg-dark px-2 py-0.5 text-xs text-text`}
            >
              {item.label}
            </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
