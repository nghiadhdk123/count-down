var swiper = new Swiper(".mySwiper", {
    spaceBetween: 24,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 5,
      }
    },
  });