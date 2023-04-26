const swiperHotCollections = new Swiper(".swiperHotCollections", {
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    1320: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1120: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiperHotBid = new Swiper(".HotBid", {
  slidesPerView: 3,
  autoplay: {
    delay: 1700,
    disableOnInteraction: false,
  },
  // spaceBetween: 30,
  // breakpoints: {
  //   1320: {
  //     slidesPerView: 4,
  //     spaceBetween: 20,
  //   },
  //   1120: {
  //     slidesPerView: 3,
  //     spaceBetween: 20,
  //   },
  //   768: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  // },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

let maxValue = document.getElementById("max-value");

function validateRange(maxPrice) {
  maxValue.innerHTML = maxPrice + " ETH";
}

const inputElements = document.querySelectorAll("input");

inputElements.forEach((element) => {
  element.addEventListener("change", (e) => {
    let maxPrice = parseInt(inputElements[1].value);

    validateRange(maxPrice);
  });
});

validateRange(inputElements[1].value);
