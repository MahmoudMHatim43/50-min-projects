const inputs = document.querySelectorAll("input");
const button = document.querySelector(".submit");

window.addEventListener("load", () => {
	inputs[0].focus();
});

inputs.forEach((input, index) => {
	input.addEventListener("keydown", event => {
		if (event.key >= 0 && event.key < 10) {
			if (index < inputs.length - 1) {
				inputs[index].value = ``;
				setTimeout(() => {
					inputs[index + 1].focus();
				}, 1);
			} else if (index == inputs.length - 1) {
				setTimeout(() => {
					button.focus();
				}, 1);
			}
		} else if (event.key == "Backspace") {
			setTimeout(() => {
				inputs[index - 1].focus();
			}, 1);
		}
	});
});
