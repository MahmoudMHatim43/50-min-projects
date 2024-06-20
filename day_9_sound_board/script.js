const btnsId = [
	"applausebtn",
	"boobtn",
	"gaspbtn",
	"tadabtn",
	"victorybtn",
	"wrongbtn",
];
btnsId.forEach((button) => {
	const btn = document.getElementById(button);
	console.log(btn);
	//TODO: Make a mouseover event listener without needing the user to click anywhere outside the document to work
	btn.addEventListener("click", () => {
		// stop all sounds at first:
		stop();
		// play the sound selected:
		const audio = document.getElementById(button.slice(0, -3));
		console.log(audio);
		audio.play();
		audio.currentTime = 0;
	});
});
// this function stops all sounds first:
function stop() {
	btnsId.forEach((button) => {
		const song = document.getElementById(button.slice(0, -3));
		song.pause();
		song.currentTime = 0;
	});
}
