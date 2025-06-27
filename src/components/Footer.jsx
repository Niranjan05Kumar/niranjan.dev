"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ConfettiExplosion from "react-confetti-explosion";

const Footer = () => {
  const [isExploding, setIsExploding] = useState(false);

  const handleSurprise = () => {
    setIsExploding(true);
    setTimeout(() => setIsExploding(false), 5000);
  };

  return (
    <div className="relative text-center flex flex-col sm:flex-row h-fit gap-4 items-center justify-center mx-[5vw] lg:mx-[15vw] py-6 border-t-2 border-(--border-dark)">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-text-muted text-base"
      >
        Thanks for your visit. The best is yet to come!
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleSurprise}
        className="bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-opacity-90 transition"
      >
        🎁 Surprise
      </motion.button>

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
    </div>
  );
};

export default Footer;
