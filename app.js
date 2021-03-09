// First Player = 0, Second Player = 1; 
var activePlayer = 1;

// Total sum of each player 
var scores = [0,0];

// Per sound score
var roundScore = 0;

// Let's prepare the starting programm
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener('click', function() {
	var diceNumber = Math.floor(Math.random() * 6) + 1;
	diceDom.style.display = "block";
	diceDom.src = "dice-" + diceNumber + ".png";
});
