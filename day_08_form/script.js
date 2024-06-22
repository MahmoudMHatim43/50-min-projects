const icons = document.querySelectorAll(".icon");
const fields = document.querySelectorAll(".field");
const togglePassword = document.querySelector(".fa-eye-slash");

fields.forEach((field) => {
	field.addEventListener("input", () => {
		icons.forEach((icon) => {
			icon.classList.add("start");
		});
	});
});

togglePassword.addEventListener("click", () => {
	const passwordField = document.querySelector("#user_password");
	if (passwordField.type === "password") {
		passwordField.type = "text";
		togglePassword.classList.remove("fa-eye-slash");
		togglePassword.classList.add("fa-eye");
		console.log(togglePassword);
	} else {
		passwordField.type = "password";
		togglePassword.classList.remove("fa-eye");
		togglePassword.classList.add("fa-eye-slash");
	}
});
