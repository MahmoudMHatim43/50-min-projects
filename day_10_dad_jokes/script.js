const jokeElement = document.getElementById("joke");
const newJokeButton = document.getElementById("btn");

// Add a click event listener to the newJokeButton
newJokeButton.addEventListener("click", getJoke);

// This function is called when the newJokeButton is clicked
async function getJoke() {
	// Configure the fetch request with an Accept header for JSON data
	const config = { headers: { Accept: "application/json" } };

	// Fetch the joke data from the 'icanhazdadjoke.com' API endpoint
	const promise = await fetch("https://icanhazdadjoke.com", config);

	// Parse the response as JSON and wait for the operation to complete
	const result = await promise.json();

	// Update the content of the jokeElement with the fetched joke and two emojis
	jokeElement.innerHTML = `${result.joke} `;
}
/*
// simple
getJoke();
function getJoke() {
	const config = {
 		headrs: {
 			 'key': 'value'
 			Accept: "application/json",
 		},
 	};
    fetch("https://icanhazdadjoke.com", config)
	.then((respond) => respond.json())
	.then((data) => console.log(data));
}
*/
