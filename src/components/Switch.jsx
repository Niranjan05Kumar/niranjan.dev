import { RiComputerLine } from "react-icons/ri";
import { FiSun } from "react-icons/fi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";

const Switch = () => {
  const getDefaultTheme = () => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(getDefaultTheme);
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      document.documentElement.classList.add(systemTheme);
    } else {
      document.documentElement.classList.add(theme);
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex bg-bg w-fit outline-2 outline-border-dark rounded-xl">
      <div className="rounded-xl w-full sm:px-2 px-1.5 py-1.5">
        <button
          onClick={() => setTheme("system")}
          className={`inline-flex text-text-muted items-center rounded-lg sm:p-2.5 p-2 hover:bg-bg-light duration-300 ${
            theme === "system" ? "bg-bg-light text-text" : "bg-transparent"
          }`}
        >
          <RiComputerLine size={16} />
        </button>
        <button
          onClick={() => setTheme("light")}
          className={`inline-flex text-text-muted items-center rounded-lg sm:p-2.5 p-2 hover:bg-bg-light duration-300 ${
            theme === "light" ? "bg-bg-light text-text" : "bg-transparent"
          }`}
        >
          <FiSun size={16} />
        </button>
        <button
          onClick={() => setTheme("dark")}
          className={`inline-flex text-text-muted items-center rounded-lg sm:p-2.5 p-2 focus:opacity-100 hover:bg-bg-light duration-300 ${
            theme === "dark" ? "bg-bg-light text-text" : "bg-transparent"
          }`}
        >
          <BsFillMoonStarsFill size={16} />
        </button>
      </div>
    </div>
  );
};

export default Switch;
