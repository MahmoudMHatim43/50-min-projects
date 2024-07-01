const container = document.querySelector(".container");
const input = document.querySelector("input");

input.addEventListener("keydown", event => {
	if (event.keyCode === 13) {
		const value = event.target.value;

		let i = 0;
		while (i < value) {
			const box = document.createElement("div");
			box.classList.add("box");

			box.addEventListener("mouseover", () => {
				box.style.backgroundColor = `rgb(${Math.floor(Math.random() * 1000)}, ${Math.floor(
					Math.random() * 1000
				)}, ${Math.floor(Math.random() * 1000)})`;
			});
			box.addEventListener("mouseout", () => {
				box.style.backgroundColor = `rgb(52, 52, 52)`;
			});

			container.appendChild(box);
			i++;
		}
	}
});
