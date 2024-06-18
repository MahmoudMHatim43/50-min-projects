const boxes = document.querySelectorAll(".item");

window.addEventListener("scroll", show);
show();
// functions
function show() {
	const triggerPoint = (window.innerHeight / 5) * 4;
	boxes.forEach((box) => {
		const boxTop = box.getBoundingClientRect().top;
		if (boxTop < triggerPoint) {
			box.classList.add("show");
		} else if (boxTop > triggerPoint) {
			box.classList.remove("show");
		}
	});
}
