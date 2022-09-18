const winningScenarios = (() => {
    const win = (winningPlayer) => {
        const winDisplay = document.querySelector(".winningDisplay");
        const winningText = document.querySelector(".winningText");
        const restartButton = document.querySelector(".restartButton");
        winningText.innerHTML = winningPlayer;
        restartButton.addEventListener("click", () => {
            winDisplay.classList.remove("active");            
        })
        setTimeout(() => {
           winDisplay.classList.add("active");
       }, 1)
       console.log("win");
    }
    return {win};
})();

const player1 = (() => { 
    
    const move = (event, player2Name) => {

        event.srcElement.innerHTML = "&#9829";
        game.movesArray[event.target.dataset.index] = 0;
        game.counterFunction();
        game.winChecker();
        console.log(game.movesArray);
        if(player2Name == "computer" && game.movesArray.length != 0){
            game.computerPlay(event);
            game.winChecker();
        }
    }
    return {move};
 })();

 const player2 = (() =>{

    const move = (event) => {
            event.srcElement.innerHTML = "&#9827";  
            game.movesArray[event.target.dataset.index] = 1;   
            game.counterFunction(); 
            game.winChecker();  
    }
    return {move};
 })();

const game = (() => {
    let createdPlayers = 0;
    let player1Name, player2Name;
    let movesArray = [];  
    let counter = 1;

    const chooseOpponentScreen = document.querySelector(".playerOrComputerWrap");
    const computerChoice = document.querySelector(".computer");
    const playerChoice = document.querySelector(".player");
    const playerNames = document.querySelector(".playerName");
    const playerNameInputField = document.querySelector(".playerNameInput");
    const board = document.querySelectorAll(".gameBoardSquare");
    const button = document.querySelector(".gameStarter");
    const createPlayer = document.querySelector(".createPlayer");
    const gameBoard = document.querySelector(".gameBoardWrapWrap");
    const background = document.querySelector(".background");

    playerNames.innerHTML = "Player 1 Name";
    
    const buttonFunction = (playerOrComputer) => {
        console.log("button function");
        button.addEventListener("click", () => {
        
        if(playerOrComputer == "player"){
            player1Name = playerNameInputField.value;
            playerNames.innerHTML = "Player 2 Name";
            playerNameInputField.value = "";
            if(createdPlayers == 1)
            {
                createPlayer.classList.remove("active");
                player2Name = playerNameInputField.value;  
                gameBoard.classList.add("active");
                background.classList.remove("active");
            }
            createdPlayers++;
        }
        else if(playerOrComputer == "computer"){

            player1Name = playerNameInputField.value;
            player2Name = "computer";
            createPlayer.classList.remove("active");
            gameBoard.classList.add("active");
            background.classList.remove("active");
        }
        })
    }

    playerChoice.addEventListener("click", () => {
        chooseOpponentScreen.classList.remove("active");
        createPlayer.classList.add("active");
        buttonFunction("player");
    })
    computerChoice.addEventListener("click", () => {
        chooseOpponentScreen.classList.remove("active");
        createPlayer.classList.add("active");
        buttonFunction("computer");
    })

    board.forEach(square => {
        square.addEventListener("click", (e) => {
            if(counter < 10 && e.srcElement.innerHTML == ""){ 

                if(counter % 2 == 0) player2.move(e);
                else player1.move(e, player2Name); 
            
            }
            else console.log("invalid move");
        });
    }); 
    let counterFunction = () => {
        counter++;
        if(counter > 9){
            counter = 1;
        }
    }

    let winChecker = () => {
        console.log("win Check");
        let checkCounter = player1rowCounter = player1columnCounter = player2rowCounter = player2columnCounter = 0;
        let i = j = 0;
        let k = 3;

        while(checkCounter < 3){

            for(; i < k; i++)
            {
                if(game.movesArray[i] == 0) player1rowCounter++;
                else if(game.movesArray[i] == 1) player2rowCounter++;
            }

            for(; j < 9; j += 3)
            {
                if(game.movesArray[j] == 0) player1columnCounter++;
                if(game.movesArray[j] == 1) player2columnCounter++;
            }
            console.log(player2rowCounter, player2columnCounter);
            if(player1rowCounter == 3 || player1columnCounter == 3) 
            { 
                board.forEach(square => {
                    square.innerHTML = "";
                })
                counter = 1;
                console.log(game.movesArray);
                game.movesArray = [];
                
                return winningScenarios.win(`${player1Name} Wins!!!`);
            }

            else if(player2rowCounter == 3 || player2columnCounter == 3)
            {       
                board.forEach(square => {
                    square.innerHTML = "";
                }) 
                counter = 1;
                console.log(game.movesArray);
                game.movesArray = [];     
                return winningScenarios.win(`${player2Name} Wins!!!`);   
            }

            else if(counter == 1 && game.movesArray != []){
                board.forEach(square => {
                    square.innerHTML = "";
                }) 
                counter = 1;
                game.movesArray = [];
                return winningScenarios.win("Draw");
            }
            checkCounter++;
            k += 3;
            player1rowCounter = player1columnCounter = player2rowCounter = player2columnCounter = 0;

            j = checkCounter;
        }

    
    } 
    let computerPlay = (event) => {
        console.log("computer play");
        let i = 0;

        while (i < 1){
            
            let randomNumber = Math.floor(Math.random() * 9);
            if(board[randomNumber].innerHTML == "")
            {
            board[randomNumber].innerHTML = "&#9827";  
            game.movesArray[randomNumber] = 1;
            console.log(movesArray, "moves array inside computerplay function");
            counterFunction(); 
            i++;
            }
        }
    }
    return {counterFunction, movesArray, player2Name, computerPlay, winChecker};
 })();








