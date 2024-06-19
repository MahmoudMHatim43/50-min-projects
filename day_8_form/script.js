const icons = document.querySelectorAll(".icon");
const fields = document.querySelectorAll(".field");

fields.forEach((field) => {
	field.addEventListener("input", () => {
		icons.forEach((icon) => {
			icon.classList.add("start");
		});
	});
});
