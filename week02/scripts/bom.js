const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
    // Check if input is blank or contains only spaces
    if (input.value.trim() === "") {
        alert("Please enter a book and chapter!"); // Display an alert message
        input.focus(); // Return focus to the input field
        return; // Exit the function early
    }

    // Create a new <li> element
    const listItem = document.createElement("li");
    listItem.textContent = input.value; // Set text content

    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌"; // Set button text
    deleteButton.classList.add("delete-btn"); // Optional: Add a CSS class

    // Add event listener to remove the <li> when delete button is clicked
    deleteButton.addEventListener("click", function () {
        list.removeChild(listItem);
    });

    // Append the delete button to the <li>
    listItem.appendChild(deleteButton);

    // Append the <li> to the <ul>
    list.appendChild(listItem);

    // Clear the input field and refocus
    input.value = ""; // Clear input field
    input.focus(); // Return focus to input
});


