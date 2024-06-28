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

  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(
    window.innerWidth <= 320
  );

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 320);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const spaces: JSX.Element | string = isSmallScreen ? (
    <>
      <br />
      <br />
    </>
  ) : (
    " "
  );

  return (
    <section id="hero">
      <div className="hero-up">
        <div className="reg">
          <img src="src\assets\orangehacklogo 1.png" alt=">.hack();_" />
          <h4>31st-1st August 2024</h4>
          <p>
            A 36hr Hackathon conducted by <span>IEEE MACE SB</span>
          </p>
        </div>
        <div className="hero-cont">
          <h4>
            Innovate{spaces}
            <span className="dot"> • </span>
            {spaces}
            Collaborate{spaces}
            <span className="dot"> • </span>
            {spaces}
            Create
          </h4>
          <span
            ref={typedElementRef}
            className="typed"
            data-typed-items="Welcome to .hack();"
          >
            Welcome to .hack();
          </span>
          <p></p>
        </div>
      </div>
      <div className="hero-design">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
