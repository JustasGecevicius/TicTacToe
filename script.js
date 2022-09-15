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
    }
    return {win};
})();

const player1 = (() => { 
    
    const move = (event) => {
        event.srcElement.innerHTML = "&#9829";
        game.movesArray[event.target.dataset.index] = 0;
        game.counterFunction();
    }
    return {move};
 })();

 const player2 = (() =>{

    const move = (event) => {
            event.srcElement.innerHTML = "&#9827";  
            game.movesArray[event.target.dataset.index] = 1;   
            game.counterFunction();   
    }
    return {move};
 })();

const game = (() => {
    let player1Name;
    let player2Name = "Player 2";
    let movesArray = [];  
    let counter = 1;

    const playerNameInputField = document.querySelector(".playerName");
    const board = document.querySelectorAll(".gameBoardSquare");
    const button = document.querySelector(".gameStarter");
    const createPlayer = document.querySelector(".createPlayer");

    button.addEventListener("click", () => {
        createPlayer.classList.remove("active");
        player1Name = playerNameInputField.value;
    })

    board.forEach(square => {
        square.addEventListener("click", (e) => {
            if(counter < 10 && e.srcElement.innerHTML == ""){ 

                if(counter % 2 == 0) player2.move(e);
                else player1.move(e); 

                winChecker(); 
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

            if(player1rowCounter == 3 || player1columnCounter == 3) 
            { 
                board.forEach(square => {
                    square.innerHTML = "";
                })
                counter = 1;
                game.movesArray = [];
                return winningScenarios.win(`${player1Name} Wins!!!`);
            }

            else if(player2rowCounter == 3 || player2columnCounter == 3)
            {       
                board.forEach(square => {
                    square.innerHTML = "";
                }) 
                counter = 1;
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
    return {counterFunction, movesArray};
 })();








