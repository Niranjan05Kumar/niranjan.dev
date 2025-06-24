import { navLinks } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "./MenuIcon";

const sidebarVariants = {
  hidden: { x: "-50%" },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 15,
      staggerChildren: 0.15,
    },
  },
  exit: { x: "-50%" },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="sm:hidden block"
      >
        <MenuIcon
          size={32}
          color="var(--text)"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sidebarVariants}
            className="fixed top-[85px] left-0 w-[60vw] p-[5vw] bg-sidebar-gradient rounded-r-3xl z-50"
          >
            <motion.ul className="flex flex-col gap-4 text-3xl font-semibold sm:hidden">
              {navLinks.map((link) => (
                <motion.li
                  key={link.id}
                  variants={itemVariants}
                  className="text-text"
                >
                  <a href={`#${link.link}`}>{link.link}</a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
