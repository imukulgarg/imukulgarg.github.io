var score, roundScore, player, gamePlaying;

init();

var lastDice;

document.querySelector('.btn-rd').addEventListener('click', function(){
	if(gamePlaying){
		var diceSelect = document.querySelector('.dice');
	
		// Display Dice
		diceSelect.style.display = 'block';
		
		// Generate Random Number
		var dice = Math.floor(Math.random() * 6 + 1);
		
		// Display Dice of generated number
		diceSelect.src = 'img/dice-' + dice + '.png';
		
		// Add the score to currrent score if it dice hits greater than 1
		
		if (dice === 6 && lastDice === 6){
			// Player looses Score
			score[player-1] = 0;
			document.querySelector('#final-score' + player).textContent = '0';
			roundScore = 0;
			dice = 0;
			changePlayer();
			
		}else if(dice !== 1) {
			// Add RoundScore
			roundScore += dice; 
			document.querySelector('#current-score' + player).textContent = roundScore;
		}else {
			changePlayer();
		}
		lastDice = dice;
		//console.log(dice1);
	}
	
});

document.querySelector('.btn-h').addEventListener('click', function(){
	if(gamePlaying){
		score[player - 1] += roundScore;
		document.querySelector('#final-score' + player).textContent = score[player-1];
		lastDice = 0;
		
		var input = document.querySelector('.finalScore').value;
		//console.log(input);
		
		var winningScore;
		
		// Here input will not take undefined, null, 0 , "" as values and won't run foe that. it will only take string and numbers
		if(input){
			winningScore = input;
		} else {
			winningScore = 100;
		}
		
		if(score[player-1] >= winningScore){
			document.querySelector('#name' + player).textContent = 'WINNER!'; 
			document.querySelector('.dice').style.display = 'none';	
			document.querySelector('.player-' + player).classList.add('winner');
			document.querySelector('.player-' + player).classList.remove('active');
			gamePlaying = false;
		} else {
			changePlayer();
		}		
	}
		
});
	
	function changePlayer(){
		// Change Player
		player === 1 ? player = 2 : player = 1 ;	
		roundScore = 0;
		document.getElementById('current-score1').textContent = '0';
		document.getElementById('current-score2').textContent = '0';
		
		//changing classes
		document.querySelector('.player-1').classList.toggle('active');
		document.querySelector('.player-2').classList.toggle('active');
		
		document.querySelector('.dice').style.display = 'none';		
	}
	
document.querySelector('.btn-ng').addEventListener('click', init);
	
	function init(){
		score = [0,0];
		roundScore = 0;
		player = 1;
		gamePlaying = true;

		document.querySelector('.dice').style.display = 'none';
		document.getElementById('final-score1').textContent = '0';
		document.getElementById('current-score1').textContent = '0';
		document.getElementById('final-score2').textContent = '0';
		document.getElementById('current-score2').textContent = '0';
		document.getElementById('name1').textContent = 'player 1';
		document.getElementById('name2').textContent = 'player 2';
		document.querySelector('.player-1').classList.remove('winner');
		document.querySelector('.player-2').classList.remove('winner');
		document.querySelector('.player-1').classList.remove('active');
		document.querySelector('.player-2').classList.remove('active');
		document.querySelector('.player-1').classList.add('active');
	}
	
	
	
	
	
	
	
	
	
	

