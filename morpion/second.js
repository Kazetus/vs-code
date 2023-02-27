const cells = document.querySelectorAll('[data-cell');
const gameStatus = document.getElementById('gameStatus');
const endGameStatus = document.getElementById('endGameStatus');
const playerOne = 'X'; 
// const playerTwo = 'O';
const playerComputer = "O";
// let playerTurn = playerOne;
let computerPlay = 0;
const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

cells.forEach(cell => {
    cell.addEventListener('click', playGame, {once: true});
})

function playGame(e) {
    e.target.innerHTML= playerOne;
    verifyWin(playerOne);
    updateGameStatus(playerOne);
    computer();
}
function verifyWin(x){
    console.log(x);
    if(checkWin(x)) {
        updateGameStatus("wins" + x);
        return endGame();
    } else if (checkDraw()) {
        updateGameStatus("draw");
        return endGame();
    }
    
}
function checkWin(x) {
    return winningPatterns.some(combination => {
        return combination.every(index => {
            return cells[index].innerHTML == x;
        });
    });
}
function checkDraw() {
    return [...cells].every(cell => {
        return cell.innerHTML == playerOne || cell.innerHTML == playerComputer;
    });
}
function updateGameStatus(status) {
    let statusText;
    switch (status) {
        case 'X':
            statusText = "A vous de jouez";
        break;
        case 'winsX':
            statusText = "Le joueur 1 a gagné.";
        break;
        case 'winsO':
            statusText = "L'ordinateur a gagné";
        break;
        case 'draw':
            statusText = "Egalité";
        break;
    }
    gameStatus.innerHTML = statusText;
    endGameStatus.innerHTML = statusText;
}

function endGame() { document.getElementById('gameEnd').style.display="block";}
function reloadGame() { window.location.reload()}
function computer() {
    if (cells[4].innerHTML == "") {
        cells[4].innerHTML = playerComputer;
    } else if (checkWinCondition(playerComputer)) {
        cells[computerPlay].innerHTML = playerComputer;
    } else if (checkWinCondition(playerOne)) {
        cells[computerPlay].innerHTML = playerComputer;
    } else {
        let stock = false;
        let angle = [0, 2, 6, 8];
        for (let i = 0; i < angle.length; i++) {
            if(cells[angle[i]].innerHTML == "" && !stock) {
                cells[angle[i]].innerHTML = playerComputer;
                stock = true;
            }
        }
    }
    verifyWin(playerComputer);
}
function checkAngle() {
    
}
function checkWinCondition(x) {
    let count = 0;
    let empty = false;
    for(let i = 0; i < winningPatterns.length; i++) {
        count = 0;
        empty = false;
        for(let j=0; j < winningPatterns[i].length; j++) {
            if(cells[winningPatterns[i][j]].innerHTML == x) {
                count++;
            } else if (cells[winningPatterns[i][j]].innerHTML == "" && !empty) {
                count++;
                empty = true;
                computerPlay = winningPatterns[i][j];
            }
            if(count == 3 && empty == true) {
                return true;
            }
        }
    }
    return false;
}