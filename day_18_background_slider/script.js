const body = document.body;
const sliders = document.querySelectorAll(".slide");
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

let activeSlideIndex = 0;
setBackgroundToTheBody();
leftArrow.addEventListener("click", () => {
	activeSlideIndex--;
	if (activeSlideIndex < 0) {
		activeSlideIndex = sliders.length - 1;
	}
	setActiveSlide();
	setBackgroundToTheBody();
});
rightArrow.addEventListener("click", () => {
	activeSlideIndex++;
	if (activeSlideIndex > sliders.length - 1) {
		activeSlideIndex = 0;
	}
	setActiveSlide();
	setBackgroundToTheBody();
});
function setActiveSlide() {
	sliders.forEach(slide => {
		slide.classList.remove("active");
	});
	sliders[activeSlideIndex].classList.add("active");
}

function setBackgroundToTheBody() {
	body.style.backgroundImage = sliders[activeSlideIndex].style.backgroundImage;
}
