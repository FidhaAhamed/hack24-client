import "./sponsor.css";
import Heading from "../heading";
// import { useEffect } from "react";
// import Swiper from "swiper";
// import "swiper/css";
// import AOS from "aos";
// import "aos/dist/aos.css";

export default function Sponsors() {
  // const initSwiperSliders = () => {
  //   const screenWidth =
  //     window.innerWidth ||
  //     document.documentElement.clientWidth ||
  //     document.body.clientWidth;
  //   const swiperContainers =
  //     document.querySelectorAll<HTMLElement>(".sponsors-slider");

  //   swiperContainers.forEach((swiperContainer) => {
  //     const swiperId = swiperContainer.dataset.swiperId as keyof HTMLElement;
  //     if (screenWidth <= 430) {
  //       if (!swiperContainer[swiperId]) {
  //         (swiperContainer as any)[swiperId] = new Swiper(swiperContainer, {
  //           // Swiper configuration options for smaller screens
  //           slidesPerView: "auto",
  //           spaceBetween: 20,
  //           loop: true,
  //           autoplay: {
  //             delay: 3000,
  //             disableOnInteraction: false,
  //           },
  //           pagination: {
  //             el: ".swiper-pagination",
  //             type: "bullets",
  //             clickable: true,
  //           },
  //         });
  //       }
  //     } else {
  //       if ((swiperContainer as any)[swiperId]) {
  //         (swiperContainer as any)[swiperId].destroy();
  //         (swiperContainer as any)[swiperId] = null;
  //       }
  //     }
  //   });
  // };

  // useEffect(() => {
  //   initSwiperSliders();
  //   window.addEventListener("resize", initSwiperSliders);

  //   AOS.init({
  //     duration: 1000,
  //     easing: "ease-in-out",
  //     once: true,
  //     mirror: false,
  //   });

  //   return () => {
  //     window.removeEventListener("resize", initSwiperSliders);
  //   };
  // }, []);

  return (
    <section id="sponsors" className="sponsors section-bg">
      <div className="container" data-aos="fade-up">
        <Heading
          heading="Sponsors"
          subheading="Our Previous Sponsors"
        ></Heading>

        <div
          id="slider1"
          className="sponsors-slider"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="sponsor-item">
                <a href="https://devfolio.co" target="_blank" rel="noopener">
                  <img
                    src="\images\devfolio.png"
                    className="sponsor-img"
                    alt="DEVFOLIO LOGO"
                  />
                </a>
                <h3>Devfolio</h3>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="sponsor-item">
                <a
                  href="https://polygon.technology/"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src="\images\polygon.png"
                    className="sponsor-img"
                    alt="POLYGON LOGO"
                  />
                </a>
                <h3>Polygon</h3>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="sponsor-item">
                <a
                  href="https://www.digitalocean.com/"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src="\images\digitalOcean.png"
                    className="sponsor-img"
                    alt="POLYGON LOGO"
                  />
                </a>
                <h3>Digital Ocean</h3>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="sponsor-item">
                <a href="#" target="_blank" rel="noopener">
                  <img
                    src="\images\innovation.png"
                    className="sponsor-img"
                    alt="Innovation LOGO"
                  />
                </a>
                <h3>Innovation</h3>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>

        <div
          className="sponsors-slider"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="sponsor-item">
                <a href="https://solana.com" target="_blank" rel="noopener">
                  <img
                    src="\images\solana.png"
                    className="sponsor-img"
                    alt="SOLANA LOGO"
                  />
                </a>
                <h3>Solana</h3>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="sponsor-item">
                <a href="https://filecoin.io" target="_blank" rel="noopener">
                  <img
                    src="\images\fielCoin.png"
                    className="sponsor-img"
                    alt="FILECOIN LOGO"
                  />
                </a>
                <h3>Filecoin</h3>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="sponsor-item">
                <a href="https://replit.com" target="_blank" rel="noopener">
                  <img
                    src="\images\replit.png"
                    className="sponsor-img"
                    alt="REPLIT LOGO"
                  />
                </a>
                <h3>Replit</h3>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="sponsor-item">
                <a
                  href="https://experionglobal.com/"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src="\images\experion.png"
                    className="sponsor-img"
                    alt="Experion LOGO"
                  />
                </a>
                <h3>Experion</h3>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="sponsor-item">
                <a
                  href="https://www.qburst.com/en-in/"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src="\images\QBurst.png"
                    className="sponsor-img"
                    alt="Qburst LOGO"
                  />
                </a>
                <h3>Q Burst</h3>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>

        <div
          className="sponsors-slider"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="sponsor-item">
                <a
                  href="https://www.keyvalue.systems/"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src="\images\keyvalue.png"
                    className="sponsor-img"
                    alt="KEYVALUE LOGO"
                  />
                </a>
                <h3>Keyvalue</h3>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="sponsor-item">
                <a
                  href="https://www.verbwire.com/"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src="\images\verbwire.png"
                    className="sponsor-img"
                    alt="VERBWIRE LOGO"
                  />
                </a>
                <h3>Verbwire</h3>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="sponsor-item">
                <a
                  href="https://streamyard.com/"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src="\images\streamYard.png"
                    className="sponsor-img"
                    alt="streamYard LOGO"
                  />
                </a>
                <h3>Stream Yard</h3>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="sponsor-item">
                <a href="https://tezos.com/" target="_blank" rel="noopener">
                  <img
                    src="\images\tezos.png"
                    className="sponsor-img"
                    alt="tezos LOGO"
                  />
                </a>
                <h3>Tezos</h3>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
      <script src="script.js"></script>
    </section>
  );
}
