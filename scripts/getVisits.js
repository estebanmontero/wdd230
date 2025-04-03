const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `🥳 Welcome!`;
}

// numVisits = 0; // this resets the counter
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);