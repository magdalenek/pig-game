//-----MAIN
var scores, roundScore, currentPlayer, gamePlaying;

statInit();

document.querySelector('.btn-roll').addEventListener('click', function(){

	if(gamePlaying) {
		var dice = Math.floor(Math.random()*6)+1;
		console.log('Dice val: ' + dice);

		var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'block';
		diceDOM.src = "img/dice-" + dice + '.png';

		if(dice !== 1) {
			roundScore += dice;
			document.querySelector('#current-' + currentPlayer).textContent = roundScore;
		} else {
			nextPlayer();
		}
	}	

});

document.querySelector('.btn-hold').addEventListener('click', function(){
	if(gamePlaying) {
		scores[currentPlayer] += roundScore;
		document.querySelector('#score-' + currentPlayer).textContent = scores[currentPlayer];
		if(scores[currentPlayer] >= 100) {
			document.getElementById('name-' + currentPlayer).textContent = 'Winner!';
			document.querySelector('.dice').style.display = 'none'; 
			document.querySelector('.player-' + currentPlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + currentPlayer + '-panel').classList.remove('active');
			gamePlaying = false; 
		} else {
			nextPlayer();
		}
	}
});

//New Game
document.querySelector('.btn-new').addEventListener('click', statInit);


//-------- HELPERS
function statInit(){
	scores = [0,0];
	roundScore = 0;
	currentPlayer = 0;
	gamePlaying = true;
	document.querySelector('.dice').style.display = 'none';
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active'); 
	document.querySelector('.player-1-panel').classList.remove('active'); 
	document.querySelector('.player-0-panel').classList.add('active');
}

function nextPlayer() {
	currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
	roundScore = 0;
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	document.querySelector('.dice').style.display = 'none';
}


