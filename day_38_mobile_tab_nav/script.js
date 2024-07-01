const buttons = document.querySelectorAll("i");
const pages = document.querySelectorAll("img");

buttons.forEach((button, index) => {
	button.addEventListener("click", () => {
		pages.forEach(page => {
			page.classList.remove("show");
		});
		pages[index].classList.add("show");
	});
});
