document.addEventListener("DOMContentLoaded", function () {
    // Get the last modified date of the document
    let lastModified = document.lastModified;

    // Select the element and update its content
    document.getElementById("lastModified").textContent = "Last modified: " + lastModified;
});



