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
          <Heading heading="About" subheading=".hack(); 2024" />
          <div className="text-center flex flex-col gap-y-4 text-snow">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              pariatur, facere sequi culpa nulla magnam, nobis aliquam iste
              voluptatibus unde nisi dolore iure? Consectetur harum id, eius ex
              sed deleniti perspiciatis cumque mollitia ipsa! Ut eum architecto
              voluptatum veritatis explicabo nobis quas, nisi quis
              necessitatibus vitae ab velit minus autem corporis consequuntur
              enim? Tenetur fugit doloremque inventore voluptatum recusandae
              veritatis.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              obcaecati ea voluptatum quis impedit esse odio? Ad, similique odit
              facilis in, hic dicta assumenda sunt accusamus iusto provident
              culpa excepturi.
            </p>
          </div>
        </div>
        <div className="col-span-1 w-full h-full  place-content-center place-items-center lg:p-8">
          {" "}
          <div className="container">
            <div className="none hex bg-lava">
              <div className="hex-inner"></div>
              <div className="title text-2xl text-snow font-bold">
                Good Health and Wellbeing
              </div>
              <div className="desc text-sm text-snow font-thin">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
                quae nihil repudiandae itaque! Architecto sunt, obcaecati
                doloremque nulla alias possimus.
              </div>
            </div>

            <div className="none hex">
              <div className="hex-inner"></div>
              <div className="text-2xl text-lava font-bold">Tracks</div>
            </div>

            {isSmallScreen && (
              <div className=" hex">
                <div className="hex-inner"></div>
                <div className="text-2xl text-lava font-bold">Tracks</div>
              </div>
            )}
            {isSmallScreen && (
              <div className="hex bg-lava">
                <div className="hex-inner"></div>
                <div className="title text-2xl text-snow font-bold">
                  Good Health and Wellbeing
                </div>
                <div className="desc text-sm text-snow font-thin">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor quae nihil repudiandae itaque! Architecto sunt,
                  obcaecati doloremque nulla alias possimus.
                </div>
              </div>
            )}
            <div className=" hex bg-void">
              <div className="hex-inner"></div>
              <div className="title text-2xl text-snow font-bold">
                Good Health and Wellbeing
              </div>
              <div className="desc text-sm text-snow font-thin">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
                quae nihil repudiandae itaque! Architecto sunt, obcaecati
                doloremque nulla alias possimus.
              </div>
            </div>
            {isSmallScreen && (
              <div className="hex bg-lava">
                <div className="hex-inner"></div>
                <div className="title text-2xl text-snow font-bold">
                  Good Health and Wellbeing
                </div>
                <div className="desc text-sm text-snow font-thin">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor quae nihil repudiandae itaque! Architecto sunt,
                  obcaecati doloremque nulla alias possimus.
                </div>
              </div>
            )}
            <div className="hex bg-void">
              <div className="hex-inner"></div>
              <div className="title text-2xl text-snow font-bold">
                Good Health and Wellbeing
              </div>
              <div className="desc text-sm text-snow font-thin">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
                quae nihil repudiandae itaque! Architecto sunt, obcaecati
                doloremque nulla alias possimus.
              </div>
            </div>

            <div className="none hex bg-lava">
              <div className="hex-inner"></div>

              <div className="title text-2xl text-snow font-bold">
                Good Health and Wellbeing
              </div>
              <div className="desc text-sm text-snow font-thin">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
                quae nihil repudiandae itaque! Architecto sunt, obcaecati
                doloremque nulla alias possimus.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
