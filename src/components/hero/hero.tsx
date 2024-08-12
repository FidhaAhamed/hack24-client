import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import "./hero.css";

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

export default function Hero() {
  const isSmallScreen = useScreenWidth();

  const typedElementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (typedElementRef.current) {
      const typedStrings =
        typedElementRef.current.getAttribute("data-typed-items");
      if (typedStrings) {
        const stringsArray = typedStrings.split(",");

        const typed = new Typed(typedElementRef.current, {
          strings: stringsArray,
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
        });

        return () => {
          typed.destroy();
        };
      }
    }
  }, []);

  const spaces = " ";

  useEffect(() => {
    generateHexGrid();
  }, []);

  const generateHexGrid = () => {
    const hexGrid = document.getElementById("hexGrid") as HTMLElement;
    const numColumns = 14;
    const numRows = 3;

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numColumns; col++) {
        const hexagon = document.createElement("div");
        hexagon.classList.add("hexagon");
        hexagon.style.marginTop = row % 2 === 0 ? "0" : "0vw";
        hexGrid.appendChild(hexagon);
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative bg-hero w-dvw h-lvh font-mono overflow-y-hidden flex place-content-center"
    >
      <div className="hex-grid" id="hexGrid"></div>
      <div className="absolute z-10 w-full h-full grid grid-rows-4 overflow-x-hidden overflow-y-hidden">
        <div className="row-span-3 overflow-x-hidden overflow-y-hidden">
          <div
            data-aos="fade-up"
            className="h-full flex flex-col md:grid md:grid-cols-5"
          >
            <div className="h-full w-full col-span-2 md:p-20">
              <div className="flex  flex-col h-full place-content-center md:pl-4">
                <div className="appear max-w-80 md:max-w-full flex text-3xl px-6 text-snow font-bold stroke">
                  Dream <span className="dot text-lg text-lava"> • </span>
                  Develop
                  <span className="dot text-lg text-lava"> • </span>Dominate
                </div>
                <img
                  className="w-96 md:w-2/3 p-4"
                  src="/images/orangehack.png"
                  alt=""
                />
                <div className="text-snow py-2 max-w-80 md:max-w-full text-2xl px-6 text-wrap ">
                  30 August - 1 September 2024
                </div>
                <div className="px-6 text-lg text-snow max-w-80 md:max-w-full text-wrap">
                  A 36hr Hackathon conducted by{" "}
                  <span className="text-lava">IEEE MACE SB</span>
                </div>
              </div>
            </div>
            <div className="none h-full w-full col-span-3 md:flex flex-col pr-16 place-content-center place-items-center">
              <div className="text-4xl text-snow font-bold stroke">
                Dream <span className="dot text-lava"> • </span>Develop
                <span className="dot text-lava"> • </span>Dominate
              </div>
              <div>
                <span
                  ref={typedElementRef}
                  className="typed text-lava text-2xl"
                  data-typed-items="Welcome to .hack();24"
                >
                  Welcome to .hack();24;
                </span>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" className="row-span-1">
          <div className="hero-design">
            <div className="white-rectangle"></div>
            <div className="grey-rectangle"></div>
            <div className="orange-rectangle"></div>
            <h4 className="rectangle-text">
              .hack();'24{spaces}
              <span className="dot"> • </span>
              {spaces}
              Dream Develop Dominate{spaces}
              <span className="dot"> • </span>
              {spaces}
              .hack();'24
              <span className="dot"> • </span>
              {spaces}
              Unlock new posibilities{spaces}
              <span className="dot"> • </span>
              {spaces}
              Code your dreams{spaces}
              <span className="dot"> • </span>
              {spaces}
              .hack();'24
            </h4>
          </div>
        </div>
      </div>
      {!isSmallScreen && (
        <div className="z-50  absolute flex gap-x-4   bottom-1/3 font-bold">
          <button className=" text-[#F56E0F] duration-300 hover:text-slate-200  w-fit px-4 text-base py-2 flex place-content-center hover:bg-[#F56E0F]  place-items-center border-2 border-[#F56E0F] rounded">
            <a href="https://bit.ly/projectexpohack">Project Expo</a>
          </button>
        </div>
      )}
      {isSmallScreen && (
        <div className="z-50  absolute flex gap-x-4   bottom-1/4">
          <button className=" text-[#F56E0F] duration-300 hover:text-slate-200  w-fit px-4 text-base py-1 flex place-content-center hover:bg-[#F56E0F]  place-items-center bottom-1/4 border-2 border-[#F56E0F] rounded">
            <a href="https://bit.ly/projectexpohack">Project Expo</a>
          </button>
          <button className=" text-[#F56E0F] duration-300 hover:text-slate-200  w-fit px-4 text-base py-1 flex place-content-center hover:bg-[#F56E0F]  place-items-center bottom-1/4 border-2 border-[#F56E0F] rounded">
            <a href="https://hack-registration.vercel.app/">Register</a>
          </button>
        </div>
      )}
    </section>
  );
}
