const squares = document.querySelectorAll('.square')
let turn = 0
let move = 0

// We need initialize the matrix board with different values for comprobe if a
// column, row or diagonal is equial and determine a winner
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

        const firsRow = board[i][0]
        const secondRow = board[i][1]
        const thirRow = board[i][2]
        
        if(areEquals(firsRow, secondRow, thirRow)){
            return true
        }
    }

    // Check cols
    for(let i = 0; i<3; i++) {
        const firstCol = board[0][i]
        const secondCol = board[1][i]
        const thirdCol = board[2][i]
        
        if(areEquals(firstCol, secondCol, thirdCol)){
            return true
        }
    }

    // Right diagonal
    let firstCord = board[0][0]
    let secondCord = board[1][1]
    let thirdCord = board[2][2]

    if(areEquals(firstCord, secondCord, thirdCord)) return true

    // Left diagonal
    firstCord = board[0][2]
    secondCord = board[1][1]
    thirdCord = board[2][0]
    
    if(areEquals(firstCord, secondCord, thirdCord)) return true

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
}

function areEquals(a, b, c) {
    return (a === b) && (a === c) && (b===c)
}





