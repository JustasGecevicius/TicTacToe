const button = document.querySelector(".gameStarter");
const playerNameInputField = document.querySelector(".playerName");
const createPlayer = document.querySelector(".createPlayer");

playerNameInputField.value = "Zeba";

let zaidejas;

button.addEventListener("click", () => { 
    
})

const player1 = (() => { 
    console.log("player created");  
    const move = (event) => {
        event.srcElement.innerHTML = "&#9829";
    }
    return {move};
 })();

 const player2 = (() =>{
    console.log("player2 created");
    const move = (event) => {
            event.srcElement.innerHTML = "&#9827";        
    }
    return {move};
 })();

const game = (() => {  
    let counter = 1; 
    const board = document.querySelectorAll(".gameBoardSquare");
    board.forEach(square => {
        square.addEventListener("click", (e) => {
            if(counter < 10 && e.srcElement.innerHTML == ""){  
                console.log("Square clicked");          
                if(counter % 2 == 0){player2.move(e); game.counterFunction()}
                else{player1.move(e); game.counterFunction()};
            }
            else{console.log("invalid move");}

        });
    }); 
    let counterFunction = () => {
        console.log(counter);
        counter++;
        if(counter > 9){
            winChecker();
        }
    }
    let winChecker = () => {
        console.log("somebody wins");
    } 

    return {board, counterFunction};
 })();








