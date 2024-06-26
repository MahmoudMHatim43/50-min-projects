const button = document.getElementById("btn");
const alerts = document.getElementById("alerts");

button.addEventListener("click", () => {
	const messages = ["Message 1", "Message 2", "Message 3", "Message 4", "Message 5", "Message 6"];
	const notification = document.createElement("div");

	notification.classList.add("alert");
	// random number
	notification.innerHTML = `${messages[Math.floor(Math.random() * (5 - 0 + 1))]}`;

	alerts.appendChild(notification);
	setTimeout(() => {
		alerts.removeChild(notification);
	}, 3000);
});
