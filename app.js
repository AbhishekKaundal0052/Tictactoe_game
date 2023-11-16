var arena = document.querySelector('.arena')
const result = document.querySelector('#result')
const popup = document.querySelector('.popup')
const playAgain = document.querySelector('#button')

let winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let xTurns = []
let oTurns = []
var turns = false;
var moves = 0;
function finalResult(attempts, player) {
    for (let i = 0; i < winningCombination.length; i++) {
        const win = winningCombination[i]
        if (win.every(position => attempts.includes(position))) {
            popup.style.visibility = "visible"
            result.innerHTML = "'" + player + "'" + "You won the game!";
            return;
        }
        else {
            if (moves == 9) {
                popup.style.visibility = "visible"
                result.innerHTML = "It is a  draw!";
                return
            }
        }
    }
}

function doubleClick(tile) {
    let flag = true
    if (tile.classList.contains('arena'))
        flag = false
    if (tile.classList.contains('clicked'))
        flag = false;
    return flag
}

arena.addEventListener('click', function (event) {
    let box = event.target
    console.log(box)
    if (doubleClick(box)) {
        moves++
        box.classList.add('clicked');
        console.log(event.target.className)
        let id = parseInt(event.target.id)
        if (turns == false) {
            box.innerText = 'X'
            turns = true
            xTurns.push(id)
            console.log(xTurns)
            finalResult(xTurns, 'X')
        }
        else {
            box.innerText = 'O'
            turns = false
            oTurns.push(id)
            console.log(oTurns)
            finalResult(oTurns, 'O')
        }

    }
}, true)
playAgain.addEventListener('click', function () {
    location.reload()
})
