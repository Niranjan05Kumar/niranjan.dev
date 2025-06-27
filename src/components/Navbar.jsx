import { navLinks } from "../data";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Switch from "./Switch";

const Navbar = ({ active }) => {
  const [activeNav, setActiveNav] = useState("0");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 px-[5vw] lg:px-[15vw] py-(--padding4) select-none flex flex-row justify-between items-center bg-trans-blur">
      <ul className="sm:flex flex-1 sm:gap-(--gap3) md:gap-(--gap4) text-lg hidden ">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.href}`}
              onClick={() => setActiveNav(link.id)}
              className={`hover:text-text duration-300 ease-in ${
                active === link.id ? "text-text font-semibold" : "text-text-muted"
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} active={ active } />

      <div>
        <Switch />
      </div>
    </nav>
  );
};

export default Navbar;
