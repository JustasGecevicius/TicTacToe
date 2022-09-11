const button = document.querySelector(".playerCreator");
let zaidejas;
button.addEventListener("click", () => {
    console.log("click")
    zaidejas = player1("dzimas");
})

const game = (() => {  
    let counter = 0; 
    const board = document.querySelectorAll(".gameBoardSquare");
    board.forEach(square => {
        square.addEventListener("click", () => {            
            if(counter % 2 == 0){player1()}
            else{zaidejas.zeba()};
        });
    });  

    return {board, counter};
 })();

 const player1 = (playerName) => { 
    console.log(playerName);   
    const zeba = () => console.log(playerName);
    return {zeba};
 }

 const computer = (() =>{
    const zeba = () => console.log("zeba2");
    console.log("computer");
    return {zeba};
 })();




