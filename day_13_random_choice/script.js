const choicesContainer = document.querySelector(".choices");
const textArea = document.querySelector(".type_box");
// Auto focus on the text type area when the page loads
textArea.focus();
// Check the input from the user and put it inside the function
textArea.addEventListener("keyup", (event) => {
	// if the input is Enter then run
	if (event.key === "Enter") {
		// Clear the textbox first
		setTimeout(() => {
			event.target.value = "";
		}, 10);
		selectRandom();
	}
	// if it's not create a choice
	else {
		createChoice(event.target.value);
	}
});
// Functions
// 1- A function that creates a choice element and append it to the document
function createChoice(input) {
	// Seperate the input with a comma to set indivisual choices
	const choices = input
		.split(",")
		.filter((choice) => choice.trim() !== "")
		.map((choice) => choice.trim());
	choicesContainer.innerHTML = ``;
	// Create a div element for every choice and set it's class then append it
	choices.forEach((choice) => {
		const choiceEl = document.createElement("div");
		choiceEl.classList.add("choice");
		choiceEl.innerHTML = choice;
		choicesContainer.appendChild(choiceEl);
	});
}

// 2- A function that chooses a random element from the div elements inside the choiceBox
function picRandomChoice() {
	const choices = document.querySelectorAll(".choice");
	return choices[Math.floor(Math.random() * choices.length)];
}
// 3-
// Highlighting function
function highlightChoice(choice) {
	// select the choice class list and add the class of highlight
	choice.classList.add("highlight");
}
// Remove Highlighting function
function unHighlightChoice(choice) {
	// select the choice class list and remove the class of highlight
	choice.classList.remove("highlight");
}
// 4-
function selectRandom() {
	// Set the number of times which is gonna highlight
	const times = 50;
	// set an interval
	const interval = setInterval(() => {
		const randomChoice = picRandomChoice();
		// Hightlight the choice
		highlightChoice(randomChoice);
		// Wait 100ms to unhightlight the choice
		setTimeout(() => {
			unHighlightChoice(randomChoice);
		}, 100);
	}, 100);
	// Clear the interval so it doesn't run forever
	setTimeout(() => {
		clearInterval(interval);
		// before clearnig pick a random choice and highlight it
		setTimeout(() => {
			const randomPick = picRandomChoice();
			highlightChoice(randomPick);
		}, 100);
	}, times * 100);
}
