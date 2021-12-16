
const gameboard = (() => {
    //private properties
    let turn = 1

    const gameboardArray = ["", "", "", "", "", "", "", "", ""];
    const divsOneToNine = document.querySelectorAll('.container>div');

    const restartGame = () => {
        gameboardArray.splice(0, 9, "", "", "", "", "", "", "", "", "")
        divsOneToNine.forEach(function(element, index) {
            element.innerHTML = gameboardArray[index]
        })
    }

    const checkForWinner = () => {
        if ((gameboardArray[0] === 'x' && gameboardArray[1] === 'x' && gameboardArray[2] === 'x') ||
            (gameboardArray[3] === 'x' && gameboardArray[4] === 'x' && gameboardArray[5] === 'x') ||
            (gameboardArray[6] === 'x' && gameboardArray[7] === 'x' && gameboardArray[8] === 'x') ||
            (gameboardArray[0] === 'x' && gameboardArray[3] === 'x' && gameboardArray[6] === 'x') ||
            (gameboardArray[1] === 'x' && gameboardArray[4] === 'x' && gameboardArray[7] === 'x') ||
            (gameboardArray[2] === 'x' && gameboardArray[5] === 'x' && gameboardArray[8] === 'x') ||
            (gameboardArray[0] === 'x' && gameboardArray[4] === 'x' && gameboardArray[8] === 'x') ||
            (gameboardArray[2] === 'x' && gameboardArray[4] === 'x' && gameboardArray[6] === 'x') )        
        {
            setTimeout(function() {alert('Player 1 is the winner!')
        }, 1)
        }
        else if ((gameboardArray[0] === 'o' && gameboardArray[1] === 'o' && gameboardArray[2] === 'o') ||
        (gameboardArray[3] === 'o' && gameboardArray[4] === 'o' && gameboardArray[5] === 'o') ||
        (gameboardArray[6] === 'o' && gameboardArray[7] === 'o' && gameboardArray[8] === 'o') ||
        (gameboardArray[0] === 'o' && gameboardArray[3] === 'o' && gameboardArray[6] === 'o') ||
        (gameboardArray[1] === 'o' && gameboardArray[4] === 'o' && gameboardArray[7] === 'o') ||
        (gameboardArray[2] === 'o' && gameboardArray[5] === 'o' && gameboardArray[8] === 'o') ||
        (gameboardArray[0] === 'o' && gameboardArray[4] === 'o' && gameboardArray[8] === 'o') ||
        (gameboardArray[2] === 'o' && gameboardArray[4] === 'o' && gameboardArray[6] === 'o') )        
    {
        setTimeout(function() {alert('Player 2 is the winner!')
    }, 1)
    }
    }

    const updateArray = (clickedID) => {
            console.log(clickedID);
            if (turn % 2 != 0 && gameboardArray[clickedID] != "x" && gameboardArray[clickedID] != "o") {
            gameboardArray.splice(clickedID, 1, "x")
            checkForWinner()
            turn ++
            }
            else if (turn % 2 === 0 && gameboardArray[clickedID] != "x" &&
            gameboardArray[clickedID] != "o") { 
            gameboardArray.splice(clickedID, 1, "o")
            checkForWinner()
            turn ++

            }
            
            divsOneToNine.forEach(function(element, index) {
                element.innerHTML = gameboardArray[index]
            })
        }

    return {updateArray, restartGame}
});

const newBoard = gameboard()


