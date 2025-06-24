import { MdOutlineFileDownload } from "react-icons/md";
import { topSkills } from "../data";

const Hero = () => {
  return (
    <section className="section mt-[90px] flex flex-col items-center justify-between gap-y-(--gap4) md:flex-row px-[5vw] lg:px-[15vw] py-(--spacing5) md:py-[120px]">
      <div className="flex flex-col w-full justify-start md:w-[50%] md:gap-(--gap)">
        <h4 className="text-text-muted text-xl">
          Hey there <span>!</span>
        </h4>
        <h1 className="uppercase font-semibold text-[8vw] lg:text-[3vw] md:text-[5vw] tracking-[3px] text-text">
          Niranjan Kumar
        </h1>
        <h2 className="text-lg md:text-xl md:tracking-[2px] text-text-muted font-semibold">
          Frontend Web Developer
        </h2>
        <p className="text-text-muted text-[16px] sm:text-[18px] w-full xl:w-[500px] mt-(--margin3)">
          A passionate Frontend Web Developer skilled in React, Tailwind CSS,
          and modern UI tools. I'm focused on becoming a Full Stack Web
          Developer while specializing in frontend to craft seamless,
          high-performance web applications.
        </p>
        <div className="action flex flex-row gap-(--gap2) justify-start mt-(--margin5)">
          <a href="#resume" download>
            <button className="flex items-center bg-text text-bg-dark hover:bg-text-muted duration-300 ease-in py-(--padding2) px-(--padding3) gap-(--gap) rounded-(--b-radius1) cursor-pointer">
              <MdOutlineFileDownload />
              Resume
            </button>
          </a>
          <button className="outline-1 outline-border-dark py-(--padding2) px-(--padding4) rounded-(--b-radius1) text-text bg-bg-dark hover:bg-bg duration-300 ease-in cursor-pointer">
            Contact
          </button>
        </div>
      </div>

      <div className="w-[90Vw] h-[90vw] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] mt-(--margin5) md:mt-0">
        <div className="w-full h-full grid grid-cols-2 md:gap-(--gap2) gap-(--gap) ">
          {topSkills.map((skill) => (
            <div key={skill.id} className="relative bg-bg-light flex justify-center items-center rounded-(--b-radius3)">
              <img src={skill.icon} alt={skill.label} className="w-[55px] h-[55px]" />
              <label className={`absolute ${skill.position} bg-bg-dark py-[1px] px-(--padding3) outline-2 outline-border-dark rounded-full text-text-muted`}>{skill.label}</label>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
