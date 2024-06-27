const text = document.getElementById("text");
const speed = document.getElementById("speed");

let final = "I Love Programming!";
let desiredSpeed = 300 / speed.value;
let index = 1;
speed.addEventListener("mouseup", event => {
	console.log(desiredSpeed);
	startTyping(desiredSpeed);
});

function startTyping() {
	text.innerHTML = final.slice(0, index);
	index++;
	if (index > final.length) {
		index = 1;
	}
	setTimeout(startTyping, desiredSpeed);
}
