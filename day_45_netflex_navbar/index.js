const openBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".fa-times");
const navbar = document.querySelector(".side-nav");
const colorSides = document.querySelectorAll(".nav");
// open nav
openBtn.addEventListener("click", () => {
  navbar.style.left = `0%`;
  colorSides.forEach((side) => {
    side.classList.add("active");
  });
});
// close nav
closeBtn.addEventListener("click", () => {
  navbar.style.left = `-40%`;
  colorSides.forEach((side) => {
    side.classList.remove("active");
  });
});
