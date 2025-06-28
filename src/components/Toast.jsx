import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Toast = ({ show, message }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration:0.9,
            ease: "easeInOut",
          }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed bottom-6 right-6 px-4 py-2 rounded-xl shadow-lg bg-bg text-text border-2 border-(--border-dark) z-50"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
