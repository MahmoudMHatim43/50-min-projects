const password = document.getElementById("password");

password.addEventListener("keydown", eve => {
	let x = eve.target.value.length;
	document.body.style.backdropFilter = `blur(${20 - scale(x, 0, 8, 0, 20)}px)`;
});

// mapping a range of numbers to another range of numbers
function scale(number, inMin, inMax, outMin, outMax) {
	return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
