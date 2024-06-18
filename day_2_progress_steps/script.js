// grap elements :
const progress = document.querySelector(".progress_line");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const steps = document.querySelectorAll(".step");
// buttons :
let currentActive = 1;
// next
next.addEventListener("click", () => {
	if (currentActive < steps.length) {
		currentActive++;
	} else {
		return;
	}
	update();
});
// prev
prev.addEventListener("click", () => {
	if (currentActive > 1) {
		currentActive--;
	} else {
		return;
	}
	update();
});
// updateFunction
function update() {
	// step
	steps.forEach((step, index) => {
		if (index < currentActive) {
			step.classList.add("active");
		} else {
			step.classList.remove("active");
		}
	});
	// progress_line
	const actives = document.querySelectorAll(".active");
	const extendWidth = (progress.style.width =
		((actives.length - 1) / (steps.length - 1)) * 100 + "%");

	// buttons
	if (currentActive === 1) {
		prev.disabled = true;
	} else if (currentActive === steps.length) {
		next.disabled = true;
	} else {
		prev.disabled = false;
		next.disabled = false;
	}
}
