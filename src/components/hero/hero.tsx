import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import "./hero.css";
export default function Hero() {
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

        // Cleanup Typed instance on component unmount
        return () => {
          typed.destroy();
        };
      }
    }
  }, []);

  const spaces = " ";

  return (
    <section id="hero" className="bg-hero h-lvh ">
      <div className="absolute z-10 w-full h-full grid grid-rows-4 overflow-x-hidden">
        <div className="row-span-3">
          <div className="h-full flex flex-col md:grid md:grid-cols-5">
            <div className="h-full w-full col-span-2 md:p-20">
              <div className="flex flex-col h-full place-content-center">
                <div className="appear text-3xl px-6 text-snow font-bold stroke">
                  Dream <span className="dot text-lg text-lava"> • </span>
                  Develop
                  <span className="dot text-lg text-lava"> • </span>Dominate
                </div>
                <img
                  className="w-96 md:w-2/3 p-4"
                  src="/images/orangehack.png"
                  alt=""
                />
                <div className="text-snow py-2 text-2xl px-6">August 2024</div>
                <div className="px-6 text-lg text-snow">
                  A 36hr Hackathon conducted by{" "}
                  <span className="text-lava">IEEE MACE SB</span>
                </div>
              </div>
            </div>
            <div className="none h-full w-full col-span-3 md:flex flex-col place-content-center place-items-center">
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
        <div className="row-span-1">
          <div className="hero-design">
            <div className="white-rectangle"></div>
            <div className="grey-rectangle"></div>
            <div className="orange-rectangle"></div>
            <h4 className="rectangle-text">
              .hack();'24{spaces}
              <span className="dot"> • </span>
              {spaces}
              Hack beyond your limits{spaces}
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
    </section>
  );
}
