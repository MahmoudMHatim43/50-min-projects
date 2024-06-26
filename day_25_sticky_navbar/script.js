const links = document.querySelectorAll("a");
const nav = document.getElementById("nav_bar");

window.addEventListener("scroll", () => {
	if (window.scrollY > nav.offsetHeight + 400) {
		nav.classList.add("active");
	} else {
		nav.classList.remove("active");
	}
});
links.forEach(link => {
	link.addEventListener("click", () => {
		removercurrent();
		link.classList.add("current");
	});
});
function removercurrent() {
	links.forEach(link => {
		link.classList.remove("current");
	});
}
