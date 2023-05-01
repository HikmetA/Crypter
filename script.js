const swiperHotCollections = new Swiper(".swiperHotCollections", {
  slidesPerView: 4,
  breakpoints: {
    1320: {
      slidesPerView: 3,
    },
    1120: {
      slidesPerView: 2,
    },
    300:{
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".collection_btn_next",
    prevEl: ".collection_btn_prev",
  },
});
const swiperHotBid = new Swiper(".HotBid", {
  slidesPerView: 4, 
  breakpoints: {
    1320: {
      slidesPerView: 3,
    },
    1120: {
      slidesPerView: 2,
    },
    300:{
      slidesPerView: 1,
    },
    
  },
  navigation: {
    prevEl: ".btn_prev",
    nextEl: ".btn_next",
  },
});
const swiper = new Swiper(".popular-sellersWrapper", {
  slidesPerView: 3,
  breakpoints: {
    1320: {
      slidesPerView: 2,
    },
    1120: {
      slidesPerView: 2,
    },
    300:{
      slidesPerView: 1,
    },
    
  },
  navigation: {
    nextEl: ".popular-sellers_btn-next",
    prevEl: ".popular-sellers_btn-prev",
  },
});
const discoverSwiper = new Swiper(".discoverSwiper", {
  slidesPerView: 2,
  breakpoints: {
    1320: {
      slidesPerView: 2,
    },
    1120: {
      slidesPerView: 2,
    },
    300:{
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".discover_next",
    prevEl: ".discover_prev",
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



const burgerMenu = document.querySelector('.burger-menu');
const overlay = document.querySelector('.menu');

burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});