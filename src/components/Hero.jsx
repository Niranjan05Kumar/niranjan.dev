import { MdOutlineFileDownload } from "react-icons/md";

const Hero = () => {
  return (
    <section className="mt-[90px] flex flex-col items-center justify-between gap-y-(--gap4) md:flex-row px-[5vw] lg:px-[15vw] py-(--spacing6)">
        <div className="flex flex-col">
            <h4 className="text-text-muted text-xl">Hey there <span>!</span></h4>
            <h1 className="uppercase text-[8vw] lg:text-[3vw] md:text-[6vw] tracking-[3px] text-text">Niranjan Kumar</h1>
            <h2 className="uppercase font-semibold text-[6vw] lg:text-[3vw] md:text-[6vw] tracking-[3px] text-text">Frontend Web Developer</h2>
            <p className="text-text-muted sm:w-[400px]">A passionate Frontend Web Developer skilled in React, Tailwind CSS, and modern UI tools. I'm focused on becoming a Full Stack Web Developer while specializing in frontend to craft seamless, high-performance web applications.</p>
            <div className="action">
                <button>
                    <MdOutlineFileDownload />
                    Resume
                </button>
                <button>
                    Contact
                </button>
            </div>
        </div>



        <div>
            Top Skills
        </div>
    </section>
  )
}

export default Hero
