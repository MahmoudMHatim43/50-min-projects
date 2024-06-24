// Select all empty boxes and the filled box
const emptyBoxes = document.querySelectorAll(".empty_box");
const filledBox = document.querySelector(".filled_box");

// Add event listeners to the filled box
filledBox.addEventListener("dragstart", dragStart);
filledBox.addEventListener("dragend", dragEnd);

// Add event listeners to each empty box
emptyBoxes.forEach(emptyBox => {
	emptyBox.addEventListener("dragover", dragOver); // Prevent default on dragover
	emptyBox.addEventListener("dragenter", dragEnter); // Add hover class on dragenter
	emptyBox.addEventListener("dragleave", dragLeave); // Remove hover class on dragleave
	emptyBox.addEventListener("drop", dragDrop); // Move the filled box to the empty box on drop
});

// Function called when dragging starts
function dragStart() {
	// Add 'hold' class to the filled box temporarily and remove it after 0ms
	this.className += " hold";
	setTimeout(() => (this.className -= "filled_box"), 0);
}

// Function called when dragging ends
function dragEnd() {
	// Reset the class of the filled box
	this.className = "filled_box";
}

// Function called when dragging over an empty box
function dragOver(event) {
	event.preventDefault(); // Prevent default action (e.g., open link)
}

// Function called when dragging enters an empty box
function dragEnter(event) {
	event.preventDefault(); // Prevent default action (e.g., open link)
	this.className += " hoverd"; // Add 'hoverd' class to the empty box
}

// Function called when dragging leaves an empty box
function dragLeave() {
	this.className = "empty_box"; // Reset the class of the empty box
}

// Function called when dragging the filled box to an empty box
function dragDrop() {
	// Reset the class of the empty box
	this.className = "empty_box";
	// Append the filled box to the empty box
	this.append(filledBox);
}
