import { MdOutlineFileDownload } from "react-icons/md";
import { topSkills } from "../data";
import { motion } from "motion/react";
import ShinyText from "../blocks/TextAnimations/ShinyText";
import Exclamation from "./Exclamation";
import { useState } from "react";
import Toast from "./Toast";
import { FaCircleCheck } from "react-icons/fa6";
import { useLenis } from "../LenisContext";

const Hero = () => {
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
  const [showToast, setShowToast] = useState(false);

  const handleDownload = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  return (
    <section
      id="about"
      className="section mt-[90px] flex flex-col items-center justify-between gap-y-(--gap4) md:flex-row px-[5vw] lg:px-[15vw] py-(--spacing5) md:py-[120px]"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="flex flex-col w-full justify-start md:w-[50%] md:gap-(--gap) mt-(--margin5) md:mt-0"
      >
        <h4 className="text-text-muted text-xl flex gap-1">
          Hey there <Exclamation text={"!"} />
        </h4>
        <h1
          className="uppercase font-semibold text-[8vw] lg:text-[3vw] md:text-[5vw] tracking-[3px] text-text"
        >
          Niranjan Kumar
        </h1>
        <ShinyText
          text="Frontend Web Developer"
          disabled={false}
          speed={3}
          className="text-lg md:text-xl md:tracking-[2px] font-semibold"
        />
        <p
          className="text-text-muted text-[16px] sm:text-[18px] w-full xl:w-[500px] mt-(--margin3)"
        >
          A passionate Frontend Web Developer skilled in React, Tailwind CSS,
          and modern UI tools. I'm focused on becoming a Full Stack Web
          Developer while specializing in frontend to craft seamless,
          high-performance web applications.
        </p>
        <div
          className="action flex flex-row gap-(--gap2) justify-start mt-(--margin5)"
        >
          <a href="/Niranjan_Kumar_Resume.pdf" onClick={handleDownload} download>
            <button className="flex items-center bg-text text-bg-dark hover:bg-text-muted duration-300 ease-in py-(--padding2) px-(--padding3) gap-(--gap) rounded-(--b-radius1) cursor-pointer">
              <MdOutlineFileDownload />
              Resume
            </button>
          </a>
          <a
            href="#contact"
            onClick={() => scrollToSection("contact")}
            className="outline-2 outline-border-dark py-(--padding2) px-(--padding4) rounded-(--b-radius1) text-text bg-bg-dark hover:bg-bg duration-300 ease-in cursor-pointer"
          >
            Contact
          </a>
          <Toast
            show={showToast}
            message={
              <span className="flex items-center gap-3 text-lg">
                <FaCircleCheck className="text-green-500 text-lg" />
                Resume downloaded !
              </span>
            }
          />
        </div>
      </motion.div>

      <motion.div initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeIn",
        }} className="w-[90vw] h-[90vw] sm:w-[350px] sm:h-[350px] my-(--margin6) md:my-0">
        <div className="w-full h-full grid grid-cols-2 md:gap-(--gap2) gap-(--gap) ">
          {topSkills.map((skill) => (
            <motion.div
              key={skill.id}
              className="relative bg-bg-light flex justify-center items-center rounded-(--b-radius3) shadow-[0_4px_4px_rgba(0,0,0,0.15)]"
              drag
              dragDirectionLock
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{
                scale: 0.9,
                transition: { duration: 0.06 },
              }}
              transition={{
                type: "spring",
              }}
            >
              <motion.img
                src={skill.icon}
                alt={skill.label}
                className="w-[55px] h-[55px]"
                animate={skill.id === 0 ? { rotate: 360 } : {}}
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 1,
                  ease: "linear",
                }}
              />
              <motion.label
                className={`absolute ${skill.position} bg-bg-dark py-[1px] px-(--padding3) outline-2 outline-border-dark rounded-full text-text-muted`}
                initial={{ rotate: -6 }}
                animate={{ rotate: 0 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1.2,
                  repeatDelay: 0.01,
                  type: "spring",
                }}
              >
                {skill.label}
              </motion.label>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
