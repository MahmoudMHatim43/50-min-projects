// Catching elements from the DOM:
const mode = document.getElementById("mode");
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".seconds");
const digitalTime = document.querySelector(".digital");
const date = document.querySelector(".date");
// Arrays we need to work with the date:
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
// Switch between dark/light modes:
mode.addEventListener("click", () => {
	console.log(mode);
	const html = document.querySelector("html");
	if (html.classList.contains("dark")) {
		mode.innerHTML = "Dark Mode";
		html.classList.remove("dark");
	} else {
		mode.innerHTML = "Light Mode";
		html.classList.add("dark");
	}
});
// Clock Functions:
setTime();
setInterval(setTime, 1000);
function setTime() {
	// Get the real world time:
	const realTime = new Date();

	// Set Date:
	const day = days[realTime.getDay() - 1];
	const dateInNum = realTime.getDate();
	const month = months[realTime.getMonth()];
	const year = realTime.getFullYear();
	function format() {
		if (dateInNum == 1) {
			return "st";
		} else if (dateInNum == 2) {
			return "nd";
		} else if (dateInNum == 3) {
			return "rd";
		} else {
			return "th";
		}
	}
	date.innerHTML = `${day} | ${dateInNum}<small>${format()}</small> - ${month} - ${year}`;

	// Set clock:
	const hour = realTime.getHours();
	const minute = realTime.getMinutes();
	const second = realTime.getSeconds();
	// Digital clock
	digitalTime.innerHTML = `${hour > 12 ? hour - 12 : hour} : ${
		minute < 10 ? "0" + minute : minute
	} : ${second < 10 ? "0" + second : second} ${hour > 12 ? "PM" : "AM"}`;

	// Needles clock
	function scale(number, inMin, inMax, outMin, outMax) {
		return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
	}
	const hoursScale = scale(hour > 12 ? hour - 12 : hour, 0, 11, 0, 360);
	const minuteScale = scale(minute, 0, 59, 0, 360);
	const secondScale = scale(second, 0, 59, 0, 360);
	hourEl.style.transform = `translate(-50%, -100%) rotate(${hoursScale}deg)`;
	minuteEl.style.transform = `translate(-50%, -100%) rotate(${minuteScale}deg)`;
	secondEl.style.transform = `translate(-50%, -100%) rotate(${secondScale}deg)`;
}
