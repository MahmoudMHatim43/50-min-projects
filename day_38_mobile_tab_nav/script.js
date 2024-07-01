const buttons = document.querySelectorAll("i");
const pages = document.querySelectorAll("img");

buttons.forEach((button, index) => {
	button.addEventListener("click", () => {
		buttons.forEach(button => {
			button.classList.remove("active");
		});
		pages.forEach(page => {
			page.classList.remove("show");
		});
		button.classList.add("active");
		pages[index].classList.add("show");
	});
});
