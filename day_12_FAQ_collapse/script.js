const questions = document.querySelectorAll(".faq");
const arrows = document.querySelectorAll(".fa-chevron-up");

arrows.forEach((arrow, index) => {
	arrow.addEventListener("click", () => {
		questions[index].classList.toggle("active");
	});
});
