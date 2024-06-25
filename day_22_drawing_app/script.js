const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const sizeBox = document.getElementById("size");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const colorBox = document.getElementById("color");
const clearButton = document.getElementById("clear");

let size = 20;
let fontColor = "black";
let x;
let y;
let pressed = false;

canvas.addEventListener("mousedown", event => {
	x = event.offsetX;
	y = event.offsetY;
	pressed = true;
	console.log(x, y);
});
canvas.addEventListener("mouseup", event => {
	x = undefined;
	y = undefined;
	pressed = false;
	console.log(x, y);
});
canvas.addEventListener("mousemove", event => {
	if (pressed) {
		let x1 = event.offsetX;
		let y1 = event.offsetY;
		drawLine(x, y, x1, y1);
	}
});
// Draw circle
function drawCircle(x, y, radius) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2);
	ctx.fillStyle = fontColor;
	ctx.fill();
	ctx.closePath();
}
// Draw line
function drawLine(x0, y0, x1, y1) {
	const dx = x1 - x0;
	const dy = y1 - y0;
	const step = Math.max(Math.abs(dx), Math.abs(dy));
	const xInc = dx / step;
	const yInc = dy / step;
	const startX = Math.round(x0);
	const startY = Math.round(y0);
	ctx.beginPath();
	ctx.strokeStyle = fontColor;
	ctx.moveTo(startX, startY);
	for (let i = 0; i <= step; i++) {
		ctx.lineTo(startX + xInc * i, startY + yInc * i);
	}
	ctx.stroke();
	ctx.closePath();
}
// Change font-size
plusButton.addEventListener("click", () => {
	size++;
	if (size > 5) {
		minusButton.innerHTML = `-`;
	}
	if (size >= 25) {
		plusButton.innerHTML = ``;
		size = 25;
	}
	sizeBox.innerHTML = `${size}px`;
});
minusButton.addEventListener("click", () => {
	size--;
	if (size < 25) {
		plusButton.innerHTML = `+`;
	}
	if (size <= 5) {
		minusButton.innerHTML = ``;
		size = 5;
	}
	sizeBox.innerHTML = `${size}px`;
});
// Change color
colorBox.addEventListener("input", () => {
	fontColor = colorBox.value;
});
// Clear canvas
clearButton.addEventListener("click", () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
});
