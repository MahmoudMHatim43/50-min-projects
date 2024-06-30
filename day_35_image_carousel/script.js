const imageContainer = document.querySelector(".images");
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const images = document.querySelectorAll("img");

let x = 0;
let length = (images.length - 1) * 100;
leftBtn.addEventListener("click", () => {
	x += 100;
	if (x > 0) {
		x = -length;
	}
	imageContainer.style.transform = `translateX(${x}%)`;
});
rightBtn.addEventListener("click", () => {
	x -= 100;
	if (x < length) {
		x = 0;
	}
	imageContainer.style.transform = `translateX(${x}%)`;
});
