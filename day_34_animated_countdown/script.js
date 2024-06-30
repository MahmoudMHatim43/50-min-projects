const numbers = document.querySelectorAll("span");
const counter = document.querySelector(".start");
const finalMessage = document.querySelector(".end");
const resetBtn = document.querySelector(".reset");

numbers.forEach((num, idx) => {
	num.addEventListener("animationend", event => {
		if (event.animationName === "goIn" && idx < numbers.length) {
			num.classList.remove("in");
			num.classList.add("out");
		} else if (event.animationName === "goOut" && num.nextElementSibling) {
			num.nextElementSibling.classList.add("in");
		} else {
			counter.classList.add("hide");
			finalMessage.classList.add("show");
		}
	});
});
resetBtn.addEventListener("click", () => {
	numbers.forEach(number => {
		number.classList.value = ``;
	});
	numbers[0].classList.add("in");
	counter.classList.remove("hide");
	finalMessage.classList.remove("show");
	// or
	//window.location.reload(); 🤣
});
