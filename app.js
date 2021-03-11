var diceDom = document.querySelector(".dice");
var scores = [0,0];
var roundScore;
var activePlayer;
var isNewGame;

function initGame() {

	isNewGame = true;

	// First Player = 0, Second Player = 1; 
	activePlayer = 0;

	// Total sum of each player 
	scores = [0,0];

	// Per sound score
	roundScore = 0;

	// Let's prepare the starting programm
	document.getElementById("current-0").textContent = 0;
	document.getElementById("current-1").textContent = 0;
	document.getElementById("score-0").textContent = 0;
	document.getElementById("score-1").textContent = 0;

	// Show player name
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';

	document.querySelector('.player-0-panel').classList.remove('winner')
	document.querySelector('.player-1-panel').classList.remove('winner')

	document.querySelector('.player-0-panel').classList.remove('active')
	document.querySelector('.player-1-panel').classList.remove('active')

	document.querySelector('.player-0-panel').classList.add('active')

	diceDom.style.display = "none";
}

//Start New Game
initGame();


// Dice throw EventListener
document.querySelector(".btn-roll").addEventListener('click', function() {
	if(isNewGame === true)  {
		//1-6 random number
		var diceNumber = Math.floor(Math.random() * 6) + 1;

		// Dice picture show in display
		diceDom.style.display = "block";
		diceDom.src = "dice-" + diceNumber + ".png";

		// Change player per round score
		if(diceNumber !== 1 ) {
			roundScore = roundScore + diceNumber;
			document.getElementById('current-' + activePlayer).textContent = roundScore;
		} else {
		// Change player turn
		switchPlayer();	
		}
	} else {
		alert('The Game is Finished. Please press on New Game Button');
	}
});

// Press Hold
document.querySelector(".btn-hold").addEventListener('click', function() {
	
	if(isNewGame) {
		scores[activePlayer] = scores[activePlayer] + roundScore;
	
		//Change display score
		document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
	
		//Check if the player win
		if(scores[activePlayer] >=10) {
			isNewGame = false;
			document.getElementById('name-' + activePlayer).textContent = "WINNER!!!"
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
	
		} else {
			switchPlayer();
		}
	} else {
		alert('The Game is Finished. Please press on New Game Button');
	}
})

// Switch to next player
function switchPlayer() {
	roundScore = 0;
	document.getElementById('current-' + activePlayer).textContent = 0;

	activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	
	diceDom.style.display = "none";
}

// Starting new game event listener
document.querySelector('.btn-new').addEventListener('click', initGame)
