import Heading from "./heading";
import "./about.scss";
import { useEffect, useState } from "react";

const useScreenWidth = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isSmallScreen;
};

export default function About() {
  const isSmallScreen = useScreenWidth();
  return (
    <div className="relative change w-dvw  md:h-dvh bg-about">
      <div className="z-10 absolute w-full h-fit  md:h-full flex flex-col md:grid md:grid-cols-2 p-8">
        <div className="col-span-1 w-full h-full pb-8 md:pb-0 flex flex-col place-content-center place-items-center lg:p-20">
          <div data-aos="fade-down">
            <Heading heading="About" subheading=".hack(); 2024" />
          </div>
          <div className="text-center text-base flex flex-col gap-y-4 text-snow">
            <p data-aos="fade-up">
              .hack(); 2024 marks the 5th iteration of IEEE MACE SB's flagship
              event, a 36-hour hackathon where passionate minds forge innovative
              solutions to pressing social issues. Its alignment with the UN’s
              Sustainable Development Goals underscores its mission of positive
              societal transformation. The hackathon welcomes all students
              passionate about technology and social impact. Renowned industry
              experts from diverse fields will judge and mentor participants,
              fostering an environment of innovation.
            </p>
            <p data-aos="fade-up">
              Beyond the coding frenzy, the event offers inspiring talks,
              insightful experience sharing sessions of past participants, a
              bustling project expo, and dedicated networking opportunities.
            </p>
          </div>
        </div>
        <div className="col-span-1 w-full h-full  place-content-center place-items-center lg:p-8">
          {" "}
          <div className="container " data-aos="flip-left">
            <div className="none hex bg-void" data-aos="flip-right">
              <div className="hex-inner"></div>
              <div className="title text-xl text-snow font-bold">
                Good Health and Wellbeing
              </div>
            </div>
            <div className="none hex bg-lava" data-aos="flip-right">
              <div className="hex-inner"></div>
              <div className="title text-xl text-snow font-bold">
                Quality Education
              </div>
            </div>
            <div className="none hex bg-lava" data-aos="flip-right">
              <div className="hex-inner"></div>
              <div className="title text-xl text-snow font-bold">
                Affordable and clean energy
              </div>
            </div>

            <div className="none hex" data-aos="flip-right">
              <div className="hex-inner"></div>
              <div className="text-xl text-lava font-bold">Tracks</div>
            </div>

            {isSmallScreen && (
              <div className=" hex" data-aos="flip-right">
                <div className="hex-inner"></div>
                <div className="text-xl text-lava font-bold">Tracks</div>
              </div>
            )}
            {isSmallScreen && (
              <div className="hex bg-lava" data-aos="flip-right">
                <div className="hex-inner"></div>
                <div className="title text-xl text-snow font-bold">
                  Good Health and Wellbeing
                </div>
              </div>
            )}
            {isSmallScreen && (
              <div className="hex bg-void" data-aos="flip-right">
                <div className="hex-inner"></div>
                <div className="title text-xl text-snow font-bold">
                  Quality Education
                </div>
              </div>
            )}
            {isSmallScreen && (
              <div className="hex bg-lava" data-aos="flip-right">
                <div className="hex-inner"></div>
                <div className="title text-xl text-snow font-bold">
                  Affordable and clean energy
                </div>
              </div>
            )}
            <div className=" hex bg-void" data-aos="flip-right">
              <div className="hex-inner"></div>
              <div className="title text-xl text-snow font-bold">
                Industry, Innovation, and infrastructure
              </div>
            </div>
            {isSmallScreen && (
              <div className="hex bg-lava" data-aos="flip-right">
                <div className="hex-inner"></div>
                <div className="title text-xl text-snow font-bold">
                  Life on Land
                </div>
              </div>
            )}
            <div className="hex bg-void" data-aos="flip-right">
              <div className="hex-inner"></div>
              <div className="title text-xl text-snow font-bold">
                Sustainable Cities and Communities
              </div>
            </div>

            <div className="none hex bg-lava" data-aos="flip-right">
              <div className="hex-inner"></div>

              <div className="title text-xl text-snow font-bold">
                Life on Land
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
