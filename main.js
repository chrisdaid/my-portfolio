const particles = document.getElementById("particles-js");
const sun = document.getElementById("sun");
const mountainsBack = document.getElementById("back");
const text = document.getElementById("text");
const mainHeading = document.getElementById("main-title");
const greeting = document.getElementById("above-text");
const btn = document.getElementById("btn");
const mountainsFront = document.getElementById("front");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  particles.style.left = value + "px";
  sun.style.top = value * 0.25 + "%";
  mountainsBack.style.top = value * 0.5 + "px";
  mountainsFront.style.top = value * 0 + "px";
  text.style.marginRight = value * 6 + "px";
  text.style.marginTop = value * 5 + "px";
  greeting.style.marginRight = value * 6 + "px";
  greeting.style.marginTop = value * 5 + "px";
  btn.style.marginTop = value * 2.5 + "px";
  btn.style.marginLeft = value * 2 + "px";
});
