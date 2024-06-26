const apiUrl = "https://api.github.com/usersw";

const form = document.getElementById("user_input");
const search = document.getElementById("search");

getUser(apiUrl, "bradtraversy");
function getUser(url, username) {
	fetch(url + username)
		.then(res => res.json())
		.then(data => console.log(data))
		.catch(error => console.log(error));
}
