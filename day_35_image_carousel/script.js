const imageContainer = document.querySelector(".images");
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const images = document.querySelectorAll("img");

let x = 0;
leftBtn.addEventListener("click", () => {
	x += 100;
	if (x > 0) {
		x = -(images.length - 1) * 100;
	}
	imageContainer.style.transform = `translateX(${x}%)`;
});
rightBtn.addEventListener("click", () => {
	x -= 100;
	if (x < -(images.length - 1) * 100) {
		x = 0;
	}
	imageContainer.style.transform = `translateX(${x}%)`;
});
