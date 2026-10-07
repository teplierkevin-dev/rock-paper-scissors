
        //GET computer choice
        function getComputerChoice () {

        let random = 0;

        function getRandomInt() { //GET a random number between 0 and 30

            return random = (Math.floor(Math.random() * 30)); 
        }
       
        getRandomInt();  

        if (random >= 0 && random <=10) {
            return "Rock"
        } else if (random >= 11 && random <= 20) {
            return "Paper"
        } else {
            return "Scissor"
        };}
       

        //GET user Human choice
        function getHumanChoice (choice) {
        
        let humanChoice = "";

        let userChoice = choice;

        if (userChoice.toLowerCase() == "rock"){
            return humanChoice = "Rock";
        } else if (userChoice.toLowerCase() == "paper") {
            return humanChoice = "Paper";
        } else if (userChoice.toLowerCase() == "scissor"){
            return humanChoice = "Scissor";
        } } 
        
        //Play the game
        function playGame () {
            let humanScore = 0, computerScore = 0;

            function verifyWinner (){
            if (humanScore == 5 || computerScore == 5){
                if (humanScore == 5){
                ShowResult.textContent = "You won the game! Congratulation!";
                showRunningScore.textContent = "";
                humanScore = 0;
                computerScore = 0;
                } else {
                ShowResult.textContent = "Looser, the computer has won the game!";
                showRunningScore.textContent = "";
                humanScore = 0;
                computerScore = 0;
                }
            }
            }

            function playRound(humanChoice , computerChoice) {
            
            if (humanChoice == computerChoice) {
                ShowResult.textContent = "This is a draw, replay again!";
                bodyPage.appendChild(ShowResult);
                return showRunningScore.textContent = "Computer: " + computerScore + " vs Your score: " + humanScore;
            } else if (humanChoice == "Rock" && computerChoice == "Paper") {
                ShowResult.textContent = "Computer won the round!";
                bodyPage.appendChild(ShowResult);
                return computerScore ++, showRunningScore.textContent = "Computer: " + computerScore + " vs Your score: " + humanScore;
            } else if (humanChoice == "Rock" && computerChoice == "Scissor") {
                ShowResult.textContent = "You won the round!";
                bodyPage.appendChild(ShowResult);
                return humanScore ++, showRunningScore.textContent = "Computer: " + computerScore + " vs Your score: " + humanScore;
            } else if (humanChoice == "Paper" && computerChoice == "Rock") {
                ShowResult.textContent = "You won the round!";
                bodyPage.appendChild(ShowResult);
                return humanScore ++, showRunningScore.textContent = "Computer: " + computerScore + " vs Your score: " + humanScore;
            } else if (humanChoice == "Paper" && computerChoice == "Scissor") {
                ShowResult.textContent = "Computer won the round!";
                bodyPage.appendChild(ShowResult);
                return computerScore++, showRunningScore.textContent = "Computer: " + computerScore + " vs Your score: " + humanScore;
            } else if (humanChoice == "Scissor" && computerChoice == "Rock") {
                ShowResult.textContent = "Computer won the round!";
                bodyPage.appendChild(ShowResult);
                return computerScore++, showRunningScore.textContent = "Computer: " + computerScore + " vs Your score: " + humanScore;
            } else if (humanChoice == "Scissor" && computerChoice == "Paper") {
                ShowResult.textContent = "You won the round!";
                bodyPage.appendChild(ShowResult);
                return humanScore++, showRunningScore.textContent = "Computer: " + computerScore + " vs Your score: " + humanScore;
            } 

            }                      
            
            const bodyPage = document.querySelector('body');
            const rockBtn = document.createElement('button');
            const paperBtn = document.createElement('button');
            const scissorBtn = document.createElement('button');
            const ShowResult = document.createElement('div')
            const showRunningScore = document.createElement('div');

            paperBtn.textContent = "Paper";
            scissorBtn.textContent = "Scissor";
            rockBtn.textContent = "Rock";            

            bodyPage.appendChild(rockBtn); 
            bodyPage.appendChild(paperBtn);
            bodyPage.appendChild(scissorBtn);
            bodyPage.appendChild(showRunningScore);

            rockBtn.addEventListener("click",() => {
                playRound(getHumanChoice("rock"), getComputerChoice());
                verifyWinner();}
            )
            paperBtn.addEventListener("click",() => {
                playRound(getHumanChoice("paper"), getComputerChoice());
                verifyWinner();}
            )
            scissorBtn.addEventListener("click",() => {
                playRound(getHumanChoice("Scissor"), getComputerChoice())
                verifyWinner();
            })
            
            
        }  
        
        playGame();

        