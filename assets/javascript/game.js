//5.player loses if user goes above the random number displayed on the screen
//6.restart function to reset the game
	//6a.another random number
	//6b.asisgn different random numbers to the crystals
	//6c.user score resets back to 0

//ready for document to load
$(document).ready(function(){
		//1.create 4 crystal variables which will be buttons
		//1a.each crystal will have a random number from (1-12) which will be hidden
		//1b. create a score tracker for total score
		var blueCrystal = Math.floor(Math.random() * 12 + 1);
		var greenCrystal = Math.floor(Math.random() * 12 + 1);
		var redCrystal = Math.floor(Math.random() * 12 + 1);
		var yellowCrystal = Math.floor(Math.random() * 12 + 1);
		var maxNumber = 120;
		var score = 0;
		var gameOver = false;
			
		//2.create a random number (19-120) to display on screen
		//2a. create a win and loss counter each set to 0 to keep track of wins and losses
		var wins = 0;
		var losses = 0;
		var computerNumber = Math.floor(Math.random() * maxNumber + 19);
		$("#randomNumber").text(computerNumber);
		
	//3.when the user clicks one of the crystals, display a counter
	//3a.create a variable to keep track of each click
			$('#blue-gem').on('click', function(){
			if(!gameOver){
				score += blueCrystal;
				$('#score-tracker').text(score);
				gameResults();
				console.log(score);
			}
		});

		$('#green-gem').on('click', function(){
			if(!gameOver) {
				score += greenCrystal;
				$('#score-tracker').text(score);
				gameResults();
				console.log(score);
			}
		});

		$('#red-gem').on('click', function(){
			if(!gameOver) {
				score += redCrystal;
				$('#score-tracker').text(score);
				gameResults();
				console.log(score);
			}	
		});

		$('#yellow-gem').on('click', function(){
			if(!gameOver) {
				score += yellowCrystal;
				$('#score-tracker').text(score);
				gameResults();
				console.log(score);
			}
		});

		$('.play-again').on('click', function(){
			resetGame();
		});

//4.player wins when user matches the random number displayed on the screen
var gameResults = function() {
	if(score === computerNumber){
		$('#results').text('You Win!');
		wins++;
		$('#wins').text(wins);
		gameOver = true;
	}
	else if(score > computerNumber){
		$('#results').text('You Lose!');
		losses++;
		$('#losses').text(losses);
		gameOver = true;
	}
}

var resetGame = function() {
	computerNumber = Math.floor(Math.random() * maxNumber + 19);
	$("#randomNumber").text(computerNumber);
	score = 0;
	gameOver = false;
	$('#results').empty();
	$("#score-tracker").empty();
	blueCrystal = Math.floor(Math.random() * 12 + 1);
	redCrystal = Math.floor(Math.random() * 12 + 1);
	greenCrystal = Math.floor(Math.random() * 12 + 1); 
	yellowCrystal = Math.floor(Math.random() * 12 + 1);
}

});