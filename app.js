var scores,roundScore,activePlayer,gamePlaying;

scores=[0,0];
roundScore=0;
activePlayer=0;
gamePlaying=true;

function initialization()
{
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';/*Note: agar yahan id dice-2
     likha aur html me dice2 likha hai means id match nhi ki to iske sath aage wala code 
     bhi execute nhi hua */

    /* Reset Scores and Player Names*/
    document.getElementById('score-0').textContent = "0";
    document.getElementById('score-1').textContent = "0";
    document.getElementById('current-score-0').textContent = "0";
    document.getElementById('current-score-1').textContent = "0";

    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";

    document.querySelector('.player-0-container').classList.remove('winner');
    document.querySelector('.player-1-container').classList.remove('winner');
    document.querySelector('.player-0-container').classList.remove('active');
    document.querySelector('.player-1-container').classList.remove('active');
    document.querySelector('.player-0-container').classList.add('active');
}
initialization();
document.querySelector('.btn-new-game').addEventListener('click', initialization);

document.querySelector('.btn-roll-dice').addEventListener('click', function () {

//    1. Check if the game is playing or not.
    if (gamePlaying) {

        //    2. Generate Two random numbers and store them in variables
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;


        //    3. Display the result on the page
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = './images/d-' + dice1 + '.png';
        document.getElementById('dice-2').src = './images/d-' + dice2 + '.png';


        //    4. Update the round score if both the dice values are not 1
        if (dice1 !== 1 && dice2 !== 1) {
            // Add Score
            roundScore += dice1 + dice2;
            document.querySelector('#current-score' + activePlayer).textContent = roundScore;

        } else {
            // Switch Player
            nextPlayer();
        }

    }

});


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    
    document.getElementById('current-score-0').textContent = '0';
    document.getElementById('current-score-1').textContent = '0';
    
    document.querySelector('.player0-container').classList.toggle('active');
    document.querySelector('.player1-container').classList.toggle('active');
    
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

}


document.querySelector('.btn-hold').addEventListener('click', function () {
   
    if(gamePlaying)
    {
        scores[activePlayer] += roundScore;
        
    //    Update the UI
        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
        
        
        var input = document.querySelector('.final-score').value;
        var winningScore;
        
        if(input) {
            winningScore = input;
        }
        
        else
        {
            winningScore = 100;
        }
        
        
        
    //    Check if the player has already won the game or not.
        if(scores[activePlayer] >= winningScore)
        {
            document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            
            document.querySelector('.player-'+activePlayer+'-container').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-container').classList.remove('active');
            gamePlaying = false;
            
            
        }
        
        else
        {
            nextPlayer();
        }        
        
    }
    
    
    
});
function showinst()
 {
	 document.querySelector('.game-rule-detail').style.display='unset';
	 document.querySelector('.game-rule').style.display='none' 
}
document.querySelector('.btn-game-rule').addEventListener('click',showinst);