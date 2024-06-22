// Select the HTML element with the ID "insert" for displaying key info
const insert = document.getElementById("insert");
// Add a keydown event listener to the window object
window.addEventListener("keydown", (key) => {
	// Prevent the default behavior of the Tab key
	if (key.keyCode === 9) {
		key.preventDefault();
	}
	// Create the HTML string for the key divs
	insert.innerHTML = `
    <div class="key">
      ${key.key === " " ? "Space" : key.key}  <small>event.key</small>
    </div>
    <div class="key">
      ${key.keyCode}
      <small>event.keyCode</small>
    </div>
    <div class="key">
      ${key.code}
      <small>event.code</small>
    </div>
    <div class="key">
      ${key.location}
      <small>event.location</small>
    </div>
    <div class="key main">
      Try Another Key
    </div>
  `;
});
