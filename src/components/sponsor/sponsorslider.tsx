import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";

const SponsorsSlider: React.FC = () => {
  const initSwiperSliders = () => {
    const screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const swiperContainers =
      document.querySelectorAll<HTMLElement>(".sponsors-slider");

    swiperContainers.forEach((swiperContainer) => {
      const swiperId = swiperContainer.dataset.swiperId as keyof HTMLElement;
      if (screenWidth <= 430) {
        if (!swiperContainer[swiperId]) {
          (swiperContainer as any)[swiperId] = new Swiper(swiperContainer, {
            // Swiper configuration options for smaller screens
            slidesPerView: "auto",
            spaceBetween: 20,
            loop: true,
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
            },
            pagination: {
              el: ".swiper-pagination",
              type: "bullets",
              clickable: true,
            },
          });
        }
      } else {
        if ((swiperContainer as any)[swiperId]) {
          (swiperContainer as any)[swiperId].destroy();
          (swiperContainer as any)[swiperId] = null;
        }
      }
    });
  };

  useEffect(() => {
    initSwiperSliders();
    window.addEventListener("resize", initSwiperSliders);

    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    return () => {
      window.removeEventListener("resize", initSwiperSliders);
    };
  }, []);

  return (
    <div className="sponsors-slider" data-swiper-id="sponsorSlider">
      {/* Your Swiper slides go here */}
      <div className="swiper-wrapper">
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
        {/* Add more slides as needed */}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default SponsorsSlider;
