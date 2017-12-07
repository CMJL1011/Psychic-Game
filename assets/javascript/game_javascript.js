<script>
// This array define the data bank of letters that the computer can select from
var letterBank = 
	["a", "b", "c", "d", "e", "f", "g", "h", "i", 
	"j", "k", "l", "m", "n", "o", "p", "q", 
	"r", "s", "t", "u", "v", "w", "x", "y", "z"];
	
// This section defines the global variables 
var wins = 0;
var losses = 0;
	
// userGuess holds the user's selections/guesses
var userGuess = 0;
//
var remainingGuesses = 9;
// remainingGuesses holds the amount of guesses that the user has left
	
var guessesSoFar = [];
// guessesSoFar hold the amount of guesses at various points in the game and stores it in computerChoice
	
var computerChoice = letterBank[Math.floor(Math.random() * letterBank.length)];
console.log("# Of Correct Guesses: " + wins + " # Of Incorrect Guesses: " + losses + " # Of Remaining Guesses: " + remainingGuesses + " # Of Guesses So Far: " + guessesSoFar + " Computer Chose: " + computerChoice);
// This "event listener" function tracks the user's keystrokes
document.onkeyup = function(event) {
	// When user presses a key and lifts, this var records it and saves to userGuess in lower case
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	// This statement adds the user's guess to guessesSoFar array  
	// if it wasn't already picked by the user
	// while ensuring that the user picks an appropriate alpha key
	if (guessesSoFar.indexOf(userGuess) < 0 && letterBank.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;
		// This statement will decrement the remaining guesses by 1
		remainingGuesses--;
	}
	// if computerChoice is same as userGuess then a win is recorded
	// remainingGuesses is reset to 9, and the guessesSoFar array is cleared
	//  Choices for the computer are reset as well
	
	if (computerChoice == userGuess) {
		wins++;
		console.log("Correct Guess!");
		remainingGuesses = 9;
		guessesSoFar = [];
		computerChoice = letterBank[Math.floor(Math.random() * letterBank.length)];
		console.log("# Of Correct Guesses: " + wins + " # Of Incorrect Guesses:: " + losses + " # Of Remaining Guesses: " + remainingGuesses + " # Of Guesses So Far: " + guessesSoFar + " Computer Chose: " + computerChoice);
	}
	// if remaining guesses = 0 then a loss is recorded
	// remainingGuesses is reset to 9, and the guessesSoFar array is cleared
	// Choices for the computer are reset as well
	
	if (remainingGuesses == 0) {
		losses++;
		console.log("You Did Not Guess Correctly... Try Again!");
		remainingGuesses = 9;
		guessesSoFar = [];
		computerChoice = letterBank[Math.floor(Math.random() * letterBank.length)];
		console.log("# Of Correct Guesses: " + wins + " # Of Incorrect Guesses: " + losses + " # Of Remaining Guesses: " + remainingGuesses + " # Of Guesses So Far: " + guessesSoFar + " Computer Chose: " + computerChoice);
	}
	// Displaying GUI
	var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h4>Guess my letter</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4># Of Incorrect Guesses: " + losses + "</h4></p>" + "<p><h4># Of Remaining Guesses: " + remainingGuesses + "</h4></p>" + "<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p>";
	// place html into the game ID
	document.querySelector("#game-gui").innerHTML = html;
};
	
		</script>
