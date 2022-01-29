const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav__list");

const addMobileNav = () => {
  navToggle.classList.toggle("active");
  navList.classList.toggle("active");
};

navToggle.addEventListener("click", addMobileNav);
// scroll to top button

let scrollBtn = document.querySelector(".scroll-to-top");

let showScrollBtn = () => {
  window.scrollY >= 600
    ? scrollBtn.classList.add("show-scroll-btn")
    : scrollBtn.classList.remove("show-scroll-btn");
};

let scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.addEventListener("scroll", showScrollBtn);
scrollBtn.addEventListener("click", scrollToTop);

// Fixed Header
const header = document.querySelector("header");

function addFixedHeader() {
  if (window.scrollY > 600) {
    header.classList.add("fixed-nav");
  } else {
    header.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", addFixedHeader);

// scrollSpy

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav__link");

let scrollSpy = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top > offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        navToggle.classList.remove("active");
        navList.classList.remove("active");

        document
          .querySelector(`.nav__link[href*=${id}]`)
          .classList.add("active");
      });
    }
  });
};

window.addEventListener("scroll", scrollSpy);

// fill the progress bar when scroll to skills section

let ProgressSection = document.querySelector(".skills");
let progressBars = document.querySelectorAll(".progress span");

let loadProgressBar = () => {
  if (window.scrollY >= ProgressSection.offsetTop - 250) {
    progressBars.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

window.addEventListener("scroll", loadProgressBar);

// stats

let statsSection = document.querySelector(".stats");
let nums = document.querySelectorAll(".stats-box .count");
let started = false; // function started? no!

// the action starts when scrolling to certain section

window.addEventListener("scroll", () => {
  if (window.scrollY >= statsSection.offsetTop - 200) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
});
let startCount = (el) => {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
};

// The Countdown

let countDown = new Date("june 30, 2022 23:59:59").getTime();

let counter = setInterval(() => {
  // get current time in ms
  let currentTime = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let timeDifference = countDown - currentTime;

  let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
}, 1000);
