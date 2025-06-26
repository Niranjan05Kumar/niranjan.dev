import { education } from "../data";
import SpotlightCard from "../blocks/Components/SpotlightCard";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Education = () => {
  return (
    <section className="px-[5vw] lg:px-[15vw] flex flex-col gap-(--gap4) my-(--margin5) mb-(--margin7) ">
      <div>
        <h2 className="text-4xl font-semibold text-text">Education</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 md:auto-rows-auto gap-(--gap3)">
        {education.map((edu) => (
          <SpotlightCard
            key={edu.id}
            className={`flex flex-col justify-center items-center gap-(--gap) rounded-xl ${edu.span}`}
            spotlightColor="var(--hover-education)"
          >
            <h2 className="text-text text-2xl mb-3">{edu.title}</h2>
            <div
              className={`flex flex-col items-center w-full ${
                edu.id === 1 || edu.id === 2
                  ? "md:flex-row md:justify-start md:items-start gap-x-(--gap4)"
                  : "flex-col justify-around md:h-full"
              }`}
            >
              <div className="w-fit flex flex-col items-center justify-center gap-(--gap)">
                <div className="relative w-full">
                  <CircularProgressbar
                    value={edu.score}
                    text=""
                    className="w-[100px] h-[100px]"
                    styles={buildStyles({
                      pathColor: "var(--primary)",
                      trailColor: "var(--bg-light)",
                    })}
                  />
                  <h4 className="absolute top-1/2 left-1/2 -translate-1/2 font-semibold text-text-muted text-lg">
                    {edu.score}%
                  </h4>
                </div>
                <h5 className="text-text-muted">{edu.totalScore}</h5>
              </div>
              <div
                className={`flex flex-col md:gap-(--gap3) ${
                  edu.id === 1 || edu.id === 2 ? "md:w-[60%]" : ""
                }`}
              >
                <p
                  className={`text-text font-semibold text-center md:text-left w-full my-3 md:my-0`}
                >
                  {edu.institute}
                </p>
                <p className="text-text-muted md:text-left w-full flex justify-between">
                  <span>{edu.stream}</span>
                  <span>{edu.year}</span>
                </p>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};

export default Education;
