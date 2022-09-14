const button = document.querySelector(".gameStarter");
const playerNameInputField = document.querySelector(".playerName");
const createPlayer = document.querySelector(".createPlayer");
const bodyElement = document.querySelector("body");



const player1 = (() => { 
    
    const move = (event) => {
        event.srcElement.innerHTML = "&#9829";
        game.movesArray[event.target.dataset.index] = 0;
        game.counterFunction();
    }
    const win = () => {
        console.log("player1 wins");
       // console.log(game.movesArray, "moves array");
        const winDisplay = document.createElement("div");
        const winningText = document.createElement("h2");
        const restartButton = document.createElement("button");
        restartButton.innerHTML = "Restart Game";
        winningText.innerHTML = "Player 1 Wins!!!";
        winDisplay.classList.add("winningDisplay");
        winDisplay.appendChild(winningText);
        winDisplay.appendChild(restartButton);
        bodyElement.appendChild(winDisplay);
        restartButton.addEventListener("click", () => {
            winDisplay.remove();
        })
    }
    return {move, win};
 })();

 const player2 = (() =>{

    const move = (event) => {
            event.srcElement.innerHTML = "&#9827";  
            game.movesArray[event.target.dataset.index] = 1;   
            game.counterFunction();   
    }
    const win = () => {
        console.log("player2 wins");
       // console.log(game.movesArray, "moves array");
        const winDisplay = document.createElement("div");
        const winningText = document.createElement("h2");
        const restartButton = document.createElement("button");
        restartButton.innerHTML = "Restart Game";
        winningText.innerHTML = "Player 2 Wins!!!";
        winDisplay.classList.add("winningDisplay");
        winDisplay.appendChild(restartButton);
        winDisplay.appendChild(winningText);
        bodyElement.appendChild(winDisplay);
        restartButton.addEventListener("click", () => {
            winDisplay.remove();            
        })
    }
    return {move, win};
 })();

const game = (() => {
    let movesArray = [];  
    let counter = 1; 
    const board = document.querySelectorAll(".gameBoardSquare");

    board.forEach(square => {
        square.addEventListener("click", (e) => {
            if(counter < 10 && e.srcElement.innerHTML == ""){ 
                console.log(counter, "counter");
                if(counter % 2 == 0) player2.move(e);
                else player1.move(e); 
                game.winChecker(); 
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
    let draw = () => {
        console.log("draw");
        // console.log(game.movesArray, "moves array");
         const winDisplay = document.createElement("div");
         const winningText = document.createElement("h2");
         const restartButton = document.createElement("button");
         restartButton.innerHTML = "Restart Game";
         winningText.innerHTML = "Draw";
         winDisplay.classList.add("winningDisplay");
         winDisplay.appendChild(restartButton);
         winDisplay.appendChild(winningText);
         bodyElement.appendChild(winDisplay);
         restartButton.addEventListener("click", () => {
             winDisplay.remove();            
         })
       }

    let winChecker = () => {
        console.log("checking for wins")
        let checkCounter = 0;
        let player1rowCounter = 0;
        let player2rowCounter = 0;
        let player1columnCounter = 0;
        let player2columnCounter = 0;

        let i = j = 0;
        let k = 3;

        while(checkCounter < 3){
            console.log(j, "j");
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
           // console.log(player2rowCounter, "2rowCounter");
            //console.log(player2columnCounter, "1columnCounter");
            if(player1rowCounter == 3 || player1columnCounter == 3) 
            {   
                //console.log(player2columnCounter, "1columnCounterinsideif");
                board.forEach(square => {
                    square.innerHTML = "";
                })
                counter = 1;
                game.movesArray = [];
                 return player1.win();
            }

            else if(player2rowCounter == 3 || player2columnCounter == 3)
            {       
                board.forEach(square => {
                    square.innerHTML = "";
                }) 
                counter = 1;
                game.movesArray = [];     
                return player2.win();   
            }
            else if(counter == 1 && game.movesArray != []){
                board.forEach(square => {
                    square.innerHTML = "";
                }) 
                counter = 1;
                game.movesArray = [];
                return draw();
            }
            checkCounter++;
            k += 3;
            //console.log(player1columnCounter, player1rowCounter);
            player1rowCounter = 0;
            player2rowCounter = 0;
            player1columnCounter = 0;
            player2columnCounter = 0;

            j = checkCounter;
        }

    
    } 


    return {counterFunction, movesArray, winChecker};
 })();








