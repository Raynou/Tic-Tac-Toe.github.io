const squares = document.querySelectorAll('.square')
let turn = 0
let move = 0

// We need initialize the matrix board with different values for comprobe if the
// elements of a column, row or diagonal are equal and determine a winner.
let board = [
    ["1","2","3"],
    ["4","5","6"],
    ["7","8","9"]
]
let options = ["X", "O"]

squares.forEach((square) => {
    square.addEventListener("click",  () => {

        square.innerHTML = drawInSquare(turn)

        // The id of each div square is his coordinate on the boad
        let [row, col] = square.id.split(",")

        // Disable the click for preventing double click on a square
        square.style.pointerEvents = 'none'

        board[row][col] = options[turn]

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
        
        console.log(board)

        let firstRow = board[i][0]
        let secondRow = board[i][1]
        let thirRow = board[i][2]

        console.log(`${firstRow}, ${secondRow}, ${thirRow}`);
        
        if(isEqual(firstRow, secondRow, thirRow)){
            return true
        }
    }

    // Check cols
    for(let i = 0; i<3; i++) {

        console.log(board)

        let firstCol = board[0][i]
        let secondCol = board[1][i]
        let thirdCol = board[2][i]

        console.log(`${firstCol}, ${secondCol}, ${thirdCol}`)
        
        if(isEqual(firstCol, secondCol, thirdCol)){
            return true
        }
    }

    // Right diagonal
    let firstCord = board[0][0]
    let secondCord = board[1][1]
    let thirdCord = board[2][2]

    if(isEqual(firstCord, secondCord, thirdCord)) return true

    // Left diagonal
    firstCord = board[0][2]
    secondCord = board[1][1]
    thirdCord = board[2][0]
    
    if(isEqual(firstCord, secondCord, thirdCord)) return true

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

function isEqual(a, b, c) {
    return a === b && a === c
}





