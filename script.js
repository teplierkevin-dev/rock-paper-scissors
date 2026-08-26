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
        function getHumanChoice () {
        
        let humanChoice = "";

        let userChoice = window.prompt("What are your choice? Rock, Paper or Scissor");

        if (userChoice.toLowerCase() == "rock"){
            return humanChoice = "Rock";
        } else if (userChoice.toLowerCase() == "paper") {
            return humanChoice = "Paper";
        } else if (userChoice.toLowerCase() == "scissor"){
            return humanChoice = "Scissor";
        } }
        

        function playGame () {
            let humanScore = 0, computerScore = 0;

            function playRound(humanChoice , computerChoice) {
            
            if (humanChoice == computerChoice) {
                console.log("This is a draw, replay again!")
                return;
            } else if (humanChoice == "Rock" && computerChoice == "Paper") {
                console.log("Computer won the round!");
                return computerScore ++;
            } else if (humanChoice == "Rock" && computerChoice == "Scissor") {
                console.log("You won the round!");
                return humanScore ++;
            } else if (humanChoice == "Paper" && computerChoice == "Rock") {
                console.log("You won the round!");
                return humanScore ++;
            } else if (humanChoice == "Paper" && computerChoice == "Scissor") {
                console.log("Computer won the round!");
                return computerScore++;
            } else if (humanChoice == "Scissor" && computerChoice == "Rock") {
                console.log("Computer won the round!");
                return computerScore++;
            } else if (humanChoice == "Scissor" && computerChoice == "Paper") {
                console.log("You won the round!");
                return humanScore++;
            }         
            }           
           
            for (let numberOfRound = 0; numberOfRound < 5 ;numberOfRound++ ){
                playRound(getHumanChoice(), getComputerChoice());
            };

            if (humanScore > computerScore){
                console.log("You won the game! Congratulation!")
            } else {
                console.log("Looser, the computer has won the game!")
            }
            //playRound(getHumanChoice(), getComputerChoice());
        }
         
        
        playGame();
        