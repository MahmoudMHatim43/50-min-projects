const xbox = document.querySelector(".xbox");
const ps = document.querySelector(".playstation");
const container = document.querySelector(".container");

xbox.addEventListener("mouseover", () => {
	xbox.classList.add("show");
	container.style.gridTemplateColumns = `2fr 1fr`;
});
xbox.addEventListener("mouseout", () => {
	xbox.classList.remove("show");
	container.style.gridTemplateColumns = `1fr 1fr`;
});
ps.addEventListener("mouseover", () => {
	ps.classList.add("show");
	container.style.gridTemplateColumns = `1fr 2fr`;
});
ps.addEventListener("mouseout", () => {
	ps.classList.remove("show");
	container.style.gridTemplateColumns = `1fr 1fr`;
});
