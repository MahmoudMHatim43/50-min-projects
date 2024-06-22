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

// why this didn't Work! Comment here please:
/* // Call the function to Get a joke from 'https://icanhazdadjoke.com'
getJoke();
function getJoke() {
	// A variable that holds the object and headers value to be more organized
	const config = {
 		headrs: {
 			 'key': 'value'
 			Accept: "application/json",
 		},
 	};
    // fetch("https://icanhazdadjoke.com", config) give us a promise back
    // .then we get the json data from the respond using .json()
    // .then give us the actual data
 	fetch("https://icanhazdadjoke.com", config)
 		.then((respond) => respond.json())
 		.then((data) => console.log(data));
}

Error message 👇 
Uncaught (in promise)
SyntaxError: Unexepected token '<', "<!DOCTYPE " ... is not valid JSON
    Promise.then (async)
    getJoke         @script.js:19
    (anonymous)     @script.js:5
<------------------------------------------------------------------>
while this worked:
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
