document.getElementById("defaultOpen").click();
function openTab(evt, category) {
  window.resizeBy(0, 1);
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("launch__tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("launch__tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(category).style.display = "block";
  evt.currentTarget.className += " active";
}

const hairSlider = document.querySelector(".hair-slider");
const skinSlider = document.querySelector(".skin-slider");
const weightSlider = document.querySelector(".weight-slider");

var swiper1 = new Swiper(hairSlider, {
  // Optional parameters
  spaceBetween: 30,
  slidesPerView: 1,
  observer: true,
  observeParents: true,
  // If we need pagination
  pagination: {
    el: hairSlider.querySelector(".hair-pagination"),
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: hairSlider.querySelector(".hair-next"),
    prevEl: hairSlider.querySelector(".hair-prev"),
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var swiper2 = new Swiper(skinSlider, {
  // Optional parameters
  spaceBetween: 30,
  slidesPerView: 1,
  observer: true,
  observeParents: true,
  // If we need pagination
  pagination: {
    el: skinSlider.querySelector(".skin-pagination"),
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: skinSlider.querySelector(".skin-next"),
    prevEl: skinSlider.querySelector(".skin-prev"),
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var swiper3 = new Swiper(weightSlider, {
  // Optional parameters
  spaceBetween: 30,
  slidesPerView: 1,
  observer: true,
  observeParents: true,
  // If we need pagination
  pagination: {
    el: weightSlider.querySelector(".weight-pagination"),
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: weightSlider.querySelector(".weight-next"),
    prevEl: weightSlider.querySelector(".weight-prev"),
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

document.querySelector(".nav__btn").addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("active");
});
