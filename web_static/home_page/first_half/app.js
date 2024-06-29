
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 130);
});

var typed = new Typed(".input", {
  strings: ["Secure Octopus"],
  typeSpeed: 70,
  startDelay: 70,
  backSpeed: 70,
  loop: true,
});

