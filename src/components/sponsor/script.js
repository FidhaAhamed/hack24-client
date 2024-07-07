import Swiper from "swiper";
function initSwiperSliders() {
  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const swiperContainers = document.querySelectorAll(".sponsors-slider");

  swiperContainers.forEach((swiperContainer) => {
    const swiperId = swiperContainer.dataset.swiperId;

    if (screenWidth <= 430) {
      if (!swiperContainer[swiperId]) {
        swiperContainer[swiperId] = new Swiper(swiperContainer, {
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
      if (swiperContainer[swiperId]) {
        swiperContainer[swiperId].destroy();
        swiperContainer[swiperId] = null;
      }
    }
  });
}

// Event listener for page load and window resize
window.addEventListener("load", () => {
  initSwiperSliders();
});
window.addEventListener("resize", initSwiperSliders);
