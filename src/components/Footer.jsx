"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ConfettiExplosion from "react-confetti-explosion";
import { FaChevronDown } from "react-icons/fa";
import AboutPort from './AboutPort'
import Exclamation from "./Exclamation";

const Footer = () => {
  const [isExploding, setIsExploding] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const handleSurprise = () => {
    setIsExploding(true);
    setTimeout(() => setIsExploding(false), 5000);
  };
  const toggleAbout = () => setShowAbout((prev) => !prev);

  return (
    <div className="relative text-center flex flex-col md:flex-row h-fit gap-4 items-center justify-center mx-[5vw] lg:mx-[15vw] py-6 border-t-2 border-(--border-dark)">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-text-muted flex gap-1 text-sm flex-wrap text-center w-full sm:w-fit justify-center"
      >
        <span className="whitespace-nowrap">Glad you dropped by, built with</span> <Exclamation text={"❤️"} /> <span className="whitespace-nowrap">&  powered by passion</span> <Exclamation text={"!"} />
      </motion.p>

      <div className="flex flex-row gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, amount: 0.4 }}
          onClick={handleSurprise}
          className="cursor-pointer text-sm bg-primary text-white px-4 py-2 rounded-md shadow hover:bg-opacity-90 transition"
        >
          🎁 Surprise
        </motion.button>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, amount: 0.4 }}
          onClick={toggleAbout}
          className="cursor-pointer text-sm group px-4 py-2 border-2 rounded-md text-text border-border-dark bg-bg-light hover:bg-bg transition flex items-center gap-2"
        >
          Under the Hood
          <motion.span
            initial={false}
            animate={{ rotate: showAbout ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-sm"
          >
            <FaChevronDown />
          </motion.span>
        </motion.button>
      </div>

      {isExploding && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ConfettiExplosion
            force={1.8}
            duration={5000}
            particleCount={400}
            width={500}
            zIndex={999}
          />
        </div>
      )}
      <AboutPort showAbout={showAbout} />
    </div>
  );
};

export default Footer;
