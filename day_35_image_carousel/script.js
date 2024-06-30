const imageContainer = document.querySelector(".images");
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const images = document.querySelectorAll("img");

let x = 0;
leftBtn.addEventListener("click", () => {
	if (x == 0) {
		x = -images.length * 100;
	}
	imageContainer.style.transform = `translateX(${(x += 100)}%)`;
});
rightBtn.addEventListener("click", () => {
	if (x == -(images.length - 1) * 100) {
		x = 100;
	}
	imageContainer.style.transform = `translateX(${(x -= 100)}%)`;
});
