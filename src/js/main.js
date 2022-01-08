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
