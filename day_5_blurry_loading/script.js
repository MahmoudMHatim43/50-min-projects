const precent = document.querySelector(".loading_precent");
const blurEffect = document.querySelector(".blur_effect");
const loadButton = document.querySelector(".btn");

let load = 0;

const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
loadButton.addEventListener("click", () => {
	let n = setInterval(blurring, 80);
});
function blurring() {
	load++;
	if (load > 99) {
		clearInterval(n);
	}
	precent.innerText = `${load}%`;
	precent.style.opacity = scale(load, 0, 100, 1, 0);
	blurEffect.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`;
}
