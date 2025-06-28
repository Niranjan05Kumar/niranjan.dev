import { navLinks } from "../data";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Switch from "./Switch";
import { motion, useScroll } from "motion/react";

const Navbar = ({ active }) => {
  const [activeNav, setActiveNav] = useState("0");
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  return (
    <nav className="fixed left-0 top-0 px-[5vw] lg:px-[15vw] py-(--padding4) select-none flex flex-row justify-between items-center bg-trans-blur">
      <ul className="sm:flex flex-1 sm:gap-(--gap3) md:gap-(--gap4) text-lg hidden ">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.href}`}
              onClick={() => setActiveNav(link.id)}
              className={`hover:text-text duration-300 ease-in ${
                active === link.id
                  ? "text-text font-semibold"
                  : "text-text-muted"
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} active={active} />

      <div>
        <Switch />
      </div>
        <motion.div style={{ scaleX: scrollYProgress }}
        className="absolute bottom-0 left-0 origin-left w-full h-[2px] bg-text-muted sm:hidden" />  
    </nav>
  );
};

export default Navbar;
