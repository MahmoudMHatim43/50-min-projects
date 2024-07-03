const feedback = document.querySelectorAll(".choose");
const container = document.querySelector(".container");
const submitBtn = document.querySelector(".btn");
const commentBtn = document.querySelector(".end");
const commentBox = document.querySelector(".thanks");

feedback.forEach(choose => {
	choose.addEventListener("click", () => {
		feedback.forEach(choose => {
			choose.classList.remove("active");
		});
		choose.classList.toggle("active");
	});
});
submitBtn.addEventListener("click", () => {
	commentBox.classList.toggle("active");
});
commentBtn.addEventListener("click", () => {
	commentBox.classList.toggle("active");
});
