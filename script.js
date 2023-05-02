const swiperHotCollections = new Swiper(".swiperHotCollections", {
  slidesPerView: 4,
  breakpoints: {
    1320: {
      slidesPerView: 3,
    },
    1120: {
      slidesPerView: 2,
    },
    300: {
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
    300: {
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
    300: {
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
    300: {
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


const burgerMenu = document.querySelector(".burger-menu");
const overlay = document.querySelector(".menu");
burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});


const select = document.querySelector(".select");
const options_list = document.querySelector(".options-list");
const options = document.querySelectorAll(".option");
select.addEventListener("click", () => {
  options_list.classList.toggle("active");
  select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
});
options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((option) => {
      option.classList.remove("selected");
    });
    select.querySelector("span").innerHTML = option.innerHTML;
    option.classList.add("selected");
    options_list.classList.toggle("active");
    select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
  });
});



const dis_select = document.querySelector('.discover_select');
const dis_list = document.querySelector('.discover_options-list');
const dis_options = document.querySelectorAll('.discover_option');
dis_select.addEventListener("click", () => {
  dis_list.classList.toggle("active");
  dis_select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
});
dis_options.forEach((discover_option) => {
  discover_option.addEventListener("click", () => {
    dis_options.forEach((discover_option) => {
      discover_option.classList.remove("selected");
    });
    dis_select.querySelector("span").innerHTML = discover_option.innerHTML;
    discover_option.classList.add("selected");
    dis_list.classList.toggle("active");
    dis_select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
  });
});


const inner_select = document.querySelector('.inner_content_select');
const inner_list = document.querySelector('.inner_content-list');
const inner_options = document.querySelectorAll('.inner_content_option');
inner_select.addEventListener("click", () => {
  inner_list.classList.toggle("active");
  inner_select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
});
inner_options.forEach((inner_option) => {
  inner_option.addEventListener("click", () => {
    inner_options.forEach((inner_option) => {
      inner_option.classList.remove("selected");
    });
    inner_select.querySelector("span").innerHTML = inner_option.innerHTML;
    inner_option.classList.add("selected");
    inner_list.classList.toggle("active");
    inner_select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
  });
});


const likes_select = document.querySelector('.likes_select')
const likes_list = document.querySelector('.likes_list')
const likes_options = document.querySelectorAll('.likes_option')

likes_select.addEventListener("click", () => {
  likes_list.classList.toggle("active");
  likes_select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
});

likes_options.forEach((likes_option) => {
  likes_option.addEventListener("click", () => {
    likes_options.forEach((likes_option) => {
      likes_option.classList.remove("selected");
    });
    likes_select.querySelector("span").innerHTML = likes_option.innerHTML;
    likes_option.classList.add("selected");
    likes_list.classList.toggle("active");
    likes_select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
  });
});


const creator_select = document.querySelector('.creator_select')
const creator_list = document.querySelector('.creator_list')
const creator_options = document.querySelectorAll('.creator_option')

creator_select.addEventListener("click", () => {
  creator_list.classList.toggle("active");
  creator_select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
});

creator_options.forEach((creator_option) => {
  creator_option.addEventListener("click", () => {
    creator_options.forEach((creator_option) => {
      creator_option.classList.remove("selected");
    });
    creator_select.querySelector("span").innerHTML = creator_option.innerHTML;
    creator_option.classList.add("selected");
    creator_list.classList.toggle("active");
    creator_select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
  });
});