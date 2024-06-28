const inputs = document.querySelectorAll("input");
const good = document.getElementById("good");
const fast = document.getElementById("fast");
const cheap = document.getElementById("cheap");
// can't be all
good.addEventListener("click", () => {
	if (fast.checked && cheap.checked) {
		fast.checked = false;
	}
});
fast.addEventListener("click", () => {
	if (good.checked && cheap.checked) {
		cheap.checked = false;
	}
});
cheap.addEventListener("click", () => {
	if (fast.checked && good.checked) {
		good.checked = false;
	}
});
