$(document).ready(function(){

    // Button listeners
    $('#rock_user').click(function(){
        console.log("User: Rock");
        playRound('rock', getComputerChoice());
        updateScores();
        checkScore();
    });

    $('#paper_user').click(function(){
        console.log("User: Paper");
        playRound('paper', getComputerChoice());
        updateScores();
        checkScore();
    });
    
    $('#scissors_user').click(function(){
        console.log("User: Scissors");
        playRound('scissors', getComputerChoice());
        updateScores();
        checkScore();
    });
    
    function getComputerChoice() {
        const items = ['rock', 'paper', 'scissors'];
        const index = Math.floor(Math.random() * items.length);

        console.log("Computer: " + items[index]);

        if(items[index] === 'rock'){
            $('#rock_cpu').show();
            $('#paper_cpu').hide();
            $('#scissors_cpu').hide();
            
        }
        if(items[index] === 'paper'){
            $('#rock_cpu').hide();
            $('#paper_cpu').show();
            $('#scissors_cpu').hide();
            
        }
        if(items[index] === 'scissors'){
            $('#rock_cpu').hide();
            $('#paper_cpu').hide();
            $('#scissors_cpu').show();
            
        }

        return items[index];
    }

    var player_score = 0;
    var cpu_score = 0;

    function updateScores(){
        $('#player_score').text(player_score);
        $('#cpu_score').text(cpu_score);
    }

    function playRound(playerChoice, computerChoice){

        if(playerChoice === computerChoice){
            console.log("Draw!");
        }

        else{
            if(playerChoice === 'rock' && computerChoice === 'scissors'){
                player_score += 1;

            }
            else if(playerChoice === 'rock' && computerChoice === 'paper'){
                cpu_score += 1;
            }
            else if(playerChoice === 'paper' && computerChoice === 'scissors'){
                cpu_score += 1;
            }
            else if(playerChoice === 'paper' && computerChoice === 'rock'){
                player_score += 1;
            }
            else if(playerChoice === 'scissors' && computerChoice === 'paper'){
                player_score += 1;
            }
            else if(playerChoice === 'scissors' && computerChoice === 'rock'){
                cpu_score += 1;
            }
        }
    }

    function checkScore() {

        console.log("Player: " + player_score);
        console.log("Computer: " + cpu_score);

        $('#win').hide();
        $('#lose').hide();

        if (player_score == 5){
            $('#win').show();
            console.log("You win!");
            player_score = 0;
            cpu_score = 0;
        }

        else if (cpu_score == 5){
            $('#lose').show();
            console.log("You lose!");
            player_score = 0;
            cpu_score = 0;
        }
    }

});