const precentage = document.getElementById("precentage");
const smallCups = document.querySelectorAll(".small_cup");
const reamin = document.getElementById("amount_unfilled");

updateBigCup();
smallCups.forEach((cup, index) => {
	cup.addEventListener("click", () => fillCup(index));
});

function fillCup(index) {
	if (
		smallCups[index].classList.contains("full") &&
		!smallCups[index].nextElementSibling.classList.contains("full")
	) {
		index--;
	}
	smallCups.forEach((cup, index2) => {
		if (index2 <= index) {
			cup.classList.add("full");
		} else {
			cup.classList.remove("full");
		}
	});
	updateBigCup();
}
function updateBigCup() {
	const fullCups = document.querySelectorAll(".full").length;
	const totalCups = smallCups.length;
	if (fullCups == 0) {
		reamin.innerHTML = `2 Liters`;
		precentage.innerHTML = `0%`;
		precentage.style.visibility = "hidden";
		precentage.style.height = 0;
	} else {
		reamin.innerHTML = ``;
		precentage.style.visibility = `visible`;
		precentage.innerHTML = `${(fullCups / totalCups) * 100}%`;
		precentage.style.height = `${(fullCups / totalCups) * 300}px`;
	}
}
