const search = document.querySelector(".container");
const button = document.querySelector(".btn");
const input = document.querySelector(".input");
button.addEventListener("click", () => {
	search.classList.toggle("active");
});
