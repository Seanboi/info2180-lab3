document.addEventListener('DOMContentLoaded',function(){});

document.addEventListener('DOMContentLoaded',function(){ 
    const board = document.getElementById("board")
    const squares = board.querySelectorAll("div");
    const statusDiv = document.getElementById("status")
    const newgame = document.querySelector(".btn");

    squares.forEach(square => {square.classList.add("square")

    let currplayer = "X"//Cuurent player
    let spaces = Array(9).fill(null)//array for boxes

    const winnercombo = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8]
    ]; // List of potential winning combinations

    function Winner(){
        for(const condition of winnercombo) {
            let [a,b,c] = condition
            if(spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c]){//Compares values in each box to see if they are equal and one of the winning conditions
                return spaces[a]
            }
        }
        return false
    }

    newgame.addEventListener('click',function(){
        spaces = Array(9).fill(null)
        //currplayer = "X"
        statusDiv.innerHTML = "Move your mouse over a square and click to play an X or an O."
        statusDiv.classList.remove("you-won")

        squares.forEach(square => {
            square.classList.remove("X","O")
            square.innerHTML = "";
        });
    });




    squares.forEach((square,index)=>{square.classList.add("square")

    square.addEventListener('click',function(){
        if(spaces[index]){
            return;
        } else {
            spaces[index] = currplayer;

            square.classList.add(currplayer);

            square.innerHTML = currplayer;

            const win = Winner()
            if (win){
                statusDiv.innerHTML = `Congratulations! ${win} is the Winner!`
                statusDiv.classList.add("you-won");
                return;
                
            }

            if (currplayer === "X"){
                currplayer = "O";
              } else {
                currplayer = "X";
              }
            
            }
        });

    square.addEventListener('mouseover',function(){
        if(!spaces[index]){
            square.classList.add("hover");
        }
    });

    square.addEventListener('mouseleave',function(){
        square.classList.remove("hover");
    });





    })

    });
});