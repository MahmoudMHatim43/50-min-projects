const nav = document.querySelector(".active");
const arrow = document.querySelector(".open");

arrow.addEventListener("click", () => {
	nav.classList.toggle("active");
	arrow.classList.toggle("open");
});
