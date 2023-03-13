const squares = document.querySelectorAll('.square')
let turn = 0
let move = 0
let board = [
    ["1","2","3"],
    ["4","5","6"],
    ["7","8","9"]
]
let options = ["X", "O"]


squares.forEach((square) => {
    square.addEventListener("click",  () => {

        square.innerHTML = drawInSquare(turn)
        let coords = square.id.split(",")
        square.style.pointerEvents = 'none'


        board[coords[0]][coords[1]] = options[turn]
        console.log(board)
        console.log(move)
        console.log(turn)

        if (hasWinned()) {
            declareEndGame(turn, false)
        }
        else if (isLastMove()) declareEndGame(turn, true)

        if (turn == 0) turn++
        else turn--
        move++
    })
})

function drawInSquare(turn){
    return options[turn]
}

function hasWinned() {
    // Check rows
    for(let i = 0; i<3; i++) {
        if(board[i][0] === board[i][1] &&
           board[i][2] === board[i][0] &&
           board[i][1] === board[i][2]){
            return true
        }
    }

    // Check cols
    for(let i = 0; i<3; i++) {
        if(board[0][i] === board[1][i] &&
           board[2][i] === board[0][i] &&
           board[1][i] === board[2][i]){
            return true
        }
    }

    // Right diagonal

    if(board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] ===  board[2][2]){
        return true
    }

    // Left diagonal

    if(board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] === board[2][0]){
        return true
    }


    return false
}

function isLastMove() {
    return move == 8
}

function declareEndGame(turn, isStalemate) {
    setTimeout(()=> {
        if(isStalemate) alert('Empate!')
        else alert(`Han ganado las ${options[turn]}`)
        resetGame()
    }, 100)
}

function resetGame() {
    squares.forEach((square) => {
        square.innerHTML = ""
        square.style.pointerEvents = "auto"
    })
    board = [
        ["1","2","3"],
        ["4","5","6"],
        ["7","8","9"]
    ]
    move = 0
    turn = 0
    console.clear()
}





