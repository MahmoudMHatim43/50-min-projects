const addBtn = document.getElementById("add_btn");
const notesContainer = document.getElementById("notes_container");
// call local storage
const savedNotes = JSON.parse(localStorage.getItem("notes"));
if (savedNotes) {
	savedNotes.forEach(savedNote => createNewNote(savedNote));
}
// add button functions
addBtn.addEventListener("click", () => createNewNote());
function createNewNote(text = "") {
	// create a note
	const note = document.createElement("div");
	note.classList.add("note");
	note.innerHTML = `
	<div class="tools" id="tools">
        <button class="edit_btn"><i class="fas fa-edit"></i></button>
        <button class="delete_btn"><i class="fas fa-trash"></i></button>
      </div>
      <div class="body" id="body"></div>
	  <textarea class="txt_area hide" id="txt_area"></textarea>
	`;
	notesContainer.appendChild(note);
	// add functionality to the note added
	const editBtn = note.querySelector(".edit_btn");
	const deleteBtn = note.querySelector(".delete_btn");
	const textArea = note.querySelector(".txt_area");
	const textBody = note.querySelector(".body");
	textBody.innerHTML = text;
	textArea.value = text;
	// delete button
	deleteBtn.addEventListener("click", () => {
		note.remove();
		updateLS();
	});
	// edit button
	editBtn.addEventListener("click", () => {
		textArea.classList.toggle("hide");
		textBody.classList.toggle("hide");
	});
	// connect the view and edit mode
	textArea.addEventListener("input", event => {
		const { value } = event.target;
		textBody.innerHTML = value;
		updateLS();
	});
}
// local storage
function updateLS() {
	const notes = document.querySelectorAll("textarea");
	const notesArr = [];
	notes.forEach(note => notesArr.push(note.value));
	localStorage.setItem("notes", JSON.stringify(notesArr));
}
