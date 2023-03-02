const cells = document.querySelectorAll('[data-cell]');
const gameStatus = document.getElementById('gameStatus');
const endGameStatus = document.getElementById('endGameStatus');
const playerOne = 'X'; 
// const playerTwo = 'O';
const playerComputer = "O";
// let playerTurn = playerOne;
let turn = 1;
let prev = "";
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
    if(!verifyWin(playerOne)) {
        updateGameStatus(playerOne);
        turn++;
        computer();
    } else {
        return "win";
    }
}
function verifyWin(x){
    if(checkWin(x)) {
        updateGameStatus("wins" + x);
        endGame();
        return true;
    } else if (checkDraw()) {
        updateGameStatus("draw");
        endGame();
        return true;
    }
    return false;
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
    if (checkWinCondition(playerComputer)) {
        computerAct(computerPlay);
    } else if (checkWinCondition(playerOne)) {
        computerAct(computerPlay);
    } else {
        if(turn == 2) {
            if (cells[4].innerHTML == "") {
                computerAct(4)
                // Si la case centrale est libre, jouer case centrale puis si angle opposé joué au suivant, jouer sur un coté.
                // si la cese centrale est libre, jouer case centrale puis si coté a été joué, jouer l'angle coller au coté joué.
            }
            else {
                computerAct(0);
                prev = "midcorner";
            }
        } else if (turn == 4) {
            switch(prev) {
                case "corner":

                break;
                case "mid":

                break;
                case "midcorner":

                break;
            }
        } else if (turn == 6) {

        } else {

        }
    }
    verifyWin(playerComputer);
}
function checkAngle() {
    let stock = 0;
    let angle = [0, 2, 6, 8];
    for (let i = 0; i < angle.length; i++) {
        if(cells[angle[i]].innerHTML != "") {
            stock = angle[i];
        }
        else {

        }
    }
    switch (stock) {
        case 0: 
            computerAct(8);
        break;
        case 2: 
            computerAct(6);
        break;
        case 6: 
            computerAct(2);
        break;
        case 8: 
            computerAct(0);
        break;
        default:
            return false;
    }
    return true;
}
function computerAct(x) {
    cells[x].innerHTML = playerComputer;
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