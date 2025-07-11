import { navLinks } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "./MenuIcon";
import { useLenis } from "../LenisContext";

const sidebarVariants = {
  hidden: { x: "-50%" },
  visible: {
    x: 0,
    transition: {
      staggerChildren: 0.15,
    },
  },
  exit: { x: "-100%" },
};

const itemVariants = {
  hidden: { opacity: 0, },
  visible: { opacity: 1, },
};

const Sidebar = ({ isOpen, setIsOpen, active }) => {
  const lenis = useLenis();

  const scrollToSection = (id) => {
    if (lenis) {
      lenis.scrollTo(`#${id}`, {
        offset: -100,
        duration: 1.2,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="relative">
      <motion.div
        onClick={() => setIsOpen((prev) => !prev)}
        className="sm:hidden block"
        initial={{
          y: -15,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <MenuIcon
          size={32}
          color="var(--text)"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sidebarVariants}
            className="fixed top-[83px] left-0 w-[60vw] p-[5vw] bg-sidebar-gradient rounded-r-3xl z-50"
          >
            <motion.ul className="flex flex-col gap-4 text-3xl font-semibold sm:hidden">
              {navLinks.map((link) => (
                <motion.li
                  key={link.id}
                  variants={itemVariants}
                  onClick={() => scrollToSection(link.href)}
                  className={`hover:text-text duration-300 ease-in ${
                    active === link.id
                      ? "text-text font-semibold"
                      : "text-text-muted"
                  }`}
                >
                  <a href={`#${link.href}`}>{link.label}</a>
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
