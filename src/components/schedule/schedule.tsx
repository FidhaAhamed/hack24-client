import "./schedule.css";
import { useState, useEffect } from "react";

export default function Schedule() {
  const [imageSrc, setImageSrc] = useState<string>("/images/line2mob 1.svg");

  const updateImageSrc = (): void => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 900) {
      setImageSrc("/images/Timeline.svg");
    } else if (screenWidth >= 768) {
      setImageSrc("/images/line2mob 1.svg");
    } else {
      setImageSrc("/images/line2mob 1.svg");
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
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odio
          dicta aut esse quis. Nihil, aspernatur ex aliquam esse consequatur
          corporis debitis, modi accusantium vero et deserunt repellat at
          molestias!
        </p> */}
      </div>

      <div className="time-bod">
        {/* <div id="item1" className="detail">
          <p className="det">Registration starts</p>
        </div>
        <div id="item2" className="detail">
          <p className="det">Registration ends</p>
        </div>
        <div id="item3" className="detail">
          <p className="det">Final Shortlisting</p>
        </div>
        <div id="item4" className="detail">
          <p className="det">Hackathon begins</p>
        </div>
        <div id="item5" className="detail">
          <p className="det">Hackathon End</p>
        </div>
        <div id="date1" className="dates">
          6 July
        </div>
        <div id="date2" className="dates">
          6 August
        </div>
        <div id="date3" className="dates">
          15 August
        </div>
        <div id="date4" className="dates">
          30 August
        </div>
        <div id="date5" className="dates">
          1 September
        </div> */}
        <img src={imageSrc} alt="Responsive" />
      </div>
    </section>
  );
}
