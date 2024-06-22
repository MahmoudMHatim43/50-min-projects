// Select the target element where choices will be displayed
const targetBox = document.querySelector(".choices");

// Select the text area where users will type their choices
const txtArea = document.querySelector(".type_box");
// focus on load on the txtArea
txtArea.focus();
// Listen for keyup events (when a key is released) on the text area
txtArea.addEventListener("keyup", (event) => {
	if (event.key === "Enter") {
		// Clear the text area after a short delay (100 milliseconds)
		setTimeout(() => {
			event.target.value = "";
		}, 100);

		// Call the selectRandom function to simulate random selection
		selectRandom();
	} else {
		// If the key pressed is not Enter, create choices based on the user's input
		createChoice(event.target.value);
	}
});

// Function to create choices from user input
function createChoice(inputText) {
	// Split the input by commas, remove empty spaces, and create an array of choices
	const choices = inputText
		.split(",")
		.filter((choice) => choice.trim() !== "")
		.map((choice) => choice.trim());

	// Clear the target box (where choices will be displayed)
	targetBox.innerHTML = "";

	// Loop through each choice, create a new element (div), set its class and text content, and append it to the target box
	choices.forEach((choice) => {
		const choiceElement = document.createElement("div");
		choiceElement.classList.add("choice"); // Add the class "choice" for styling
		choiceElement.innerHTML = choice;
		targetBox.appendChild(choiceElement);
	});
}

// Function to highlight a choice element (used during random selection animation)
function doChoice(targetedChoice) {
	// Simply add the class "highlight" to the targeted choice element for visual highlighting
	targetedChoice.classList.add("highlight");
}

// Function to remove highlight from a choice element
function unDoChoice(targetedChoice) {
	// Remove the class "highlight" from the targeted choice element, stopping the highlight effect
	targetedChoice.classList.remove("highlight");
}

// Function to pick a random choice element
function picRandom() {
	// Select all elements with the class "choice" (all the created choices)
	const allChoices = document.querySelectorAll(".choice");

	// Pick a random index from 0 to the total number of choices minus 1
	const randomIndex = Math.floor(Math.random() * allChoices.length);

	// Return the randomly chosen element from the list of all choices
	return allChoices[randomIndex];
}

// Function to simulate a random selection process
function selectRandom() {
	// Set the number of times to highlight choices for the animation effect (30 in this case)
	const times = 30;

	// Create an interval that will run repeatedly for the specified number of times
	const interval = setInterval(() => {
		// Pick a random choice element
		const randomChoice = picRandom();

		// Highlight the chosen element using the doChoice function
		doChoice(randomChoice);

		// Set a timeout to remove the highlight after 100 milliseconds, creating a blinking effect
		setTimeout(() => {
			unDoChoice(randomChoice);
		}, 100);
	}, 100); // Interval repeats every 100 milliseconds

	// After all the highlighting iterations are done, clear the interval to stop it
	setTimeout(() => {
		clearInterval(interval);

		// With another delay (same as interval delay), pick a final random choice and highlight it permanently
		setTimeout(() => {
			const finalChoice = picRandom();
			doChoice(finalChoice);
		}, 100);
	}, times * 100); // Clear interval and pick final choice after total iterations * interval time
}
