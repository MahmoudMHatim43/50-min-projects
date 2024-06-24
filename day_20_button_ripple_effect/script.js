const btn = document.getElementById("btn");
btn.addEventListener("click", eve => {
	// Position of click according to window
	const x = eve.clientX; // in the x axis
	const y = eve.clientY; // in the y axis

	// Position of the button according to window
	const btnLeft = eve.target.offsetLeft; // in the x axis
	const btnTop = eve.target.offsetTop; // in the y axis

	// The spot where the button was clicked
	const positionLeft = x - btnLeft; // in the x axis
	const positionTop = y - btnTop; // in the y axis

	// create circle
	const circle = document.createElement("span");
	circle.classList.add("circle");
	// style the circle
	circle.style.left = `${positionLeft}px`;
	circle.style.top = `${positionTop}px`;
	//append the circle to the button element
	btn.appendChild(circle);
});
