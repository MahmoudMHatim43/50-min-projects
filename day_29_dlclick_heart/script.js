const container = document.querySelector(".container");
const heart = document.querySelector(".red_heart");
const times = document.getElementById("times");

let clickTime = 0;
let score = 0;
container.addEventListener("click", event => {
	if (clickTime == 0) {
		clickTime = new Date().getTime();
	} else {
		if (new Date().getTime() - clickTime > 750) {
			console.log("Fail");
			clickTime = 0;
		} else {
			console.log("Success");
			clickTime = 0;
			heart.classList.remove("scale");
			score++;
			times.innerHTML = `${score}`;
			createHeart(event);
		}
	}
});
function createHeart(event) {
	const leftPosition = event.clientX - container.getBoundingClientRect().left;
	const topPosition = event.clientY - container.getBoundingClientRect().top;

	heart.style.top = `${topPosition}px`;
	heart.style.left = `${leftPosition}px`;
	heart.classList.add("scale");
}
