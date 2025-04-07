const form = document.querySelector("form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", function(event) {
    if (password.value !== confirmPassword.value) {
        event.preventDefault();
        alert("Passwords do not match. Please try again.");
        password.value = "";
        confirmPassword.value = "";
        password.focus();
    }
});
