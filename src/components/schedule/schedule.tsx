import "./schedule.css";
import { useState, useEffect } from "react";

export default function Schedule() {
  const [imageSrc, setImageSrc] = useState<string>("src/assets/line2mob.svg");

  const updateImageSrc = (): void => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 900) {
      setImageSrc("src/assets/Line 2.svg");
    } else if (screenWidth >= 768) {
      setImageSrc("src/assets/line2mob.svg");
    } else {
      setImageSrc("src/assets/line2mob.svg");
    }
  };

  useEffect(() => {
    // Update image source on initial load
    updateImageSrc();

    // Update image source on window resize
    window.addEventListener("resize", updateImageSrc);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateImageSrc);
  }, []);
  return (
    <section id="timeline" className="bg-void-m">
      <div className="timeline-container">
        <div className="upper-heading">Timeline</div>
        <div className="lower-heading">
          <h2>Take a Trek Through Our Schedule</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odio
          dicta aut esse quis. Nihil, aspernatur ex aliquam esse consequatur
          corporis debitis, modi accusantium vero et deserunt repellat at
          molestias!
        </p>
      </div>

      <img src={imageSrc} alt="Responsive" />
    </section>
  );
}
