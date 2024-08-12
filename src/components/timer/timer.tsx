import { useEffect, useState } from "react";
import Heading from "../heading";
import "./timer.css";

export default function Timer() {
  const [timeRemaining, setTimeRemaining] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const countdownDate = new Date(2024, 7, 14, 0, 0, 0, 0).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeRemaining({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeRemaining({
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        });
      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);
  // useEffect(() => {
  //   const script = document.createElement("script");

  //   script.src = "https://cdn.logwork.com/widget/countdown.js";
  //   script.async = true;

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  return (
    <>
      <section id="Countdown">
        <div className="section-header position-absolute" data-aos="fade-down">
          <Heading heading="" subheading="Time Left" />
        </div>
        <div className="timer" data-aos="fade-down">
          <div id="days">{timeRemaining.days}</div>
          <span className="timer-span">D</span>
          <div id="hours">{timeRemaining.hours}</div>
          <span className="timer-span">Hrs</span>
          <div id="minutes">{timeRemaining.minutes}</div>
          <span className="timer-span">mins</span>
          <div id="seconds">{timeRemaining.seconds}</div>
          <span className="timer-span">s</span>
        </div>
        <div className="text-center text-base flex flex-col gap-y-4 text-snow">
          <p data-aos="fade-up">Register now!!</p>
        </div>
        <div
          className="z-50  flex gap-x-4 justify-center items-center p-5"
          data-aos="fade-up"
        >
          <button className=" text-[#F56E0F] duration-300 hover:text-slate-200  w-fit px-4 text-base py-1 flex place-content-center hover:bg-[#F56E0F]  place-items-center bottom-1/4 border-2 border-[#F56E0F] rounded">
            <a href="https://hack-registration.vercel.app/">Register</a>
          </button>
        </div>
        {/* <div className="z-50  absolute flex gap-x-4   bottom-1/3 font-bold">
          <button className=" text-[#F56E0F] duration-300 hover:text-slate-200  w-fit px-4 text-base py-2 flex place-content-center hover:bg-[#F56E0F]  place-items-center border-2 border-[#F56E0F] rounded">
            <a href="https://bit.ly/projectexpohack">Project Expo</a>
          </button>
        </div> */}
      </section>
    </>
  );
}
