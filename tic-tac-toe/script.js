const Gameboard = (() => {
    const row = 3;
    const column = 3;
    let board = [];
    for(let i=0; i<row; ++i){
        board.push([]);
        for(let j=0; j<column; ++j){
            board[i].push(Cell());
        }
    }
    const getBoard = () => board;
    const cellToArray = () => {
        return board.map(row => row.map(cell => cell.getValue()))
    }
    const getCell = (row, column) => board[row][column]
    const checkHorizontal = () => {
        const boardArray = cellToArray()
        for(const row of boardArray){
            if(row.every(value => value === 1))
                return 1
            if(row.every(value => value === 2))
                return 2
        }
        return 0
    }
    const checkVertical = () => {
        const boardArray = cellToArray();
        const cols = boardArray[0].length;
        const rows = boardArray.length;
        for(let col = 0; col < cols; ++col){
            let colValues = [];
            for(let row = 0; row < rows; ++row){
                colValues.push(boardArray[row][col]);
            }
            if(colValues.every(value => value === 1))
                return 1
            if(colValues.every(value => value === 2))
                return 2
        }
        return 0;
    }
    const checkDiagonal = () => {
        traces = [
            [getCell(0,0).getValue(), getCell(1,1).getValue(), getCell(2,2).getValue()],
            [getCell(2,0).getValue(), getCell(1,1).getValue(), getCell(0,2).getValue()]
        ]
        for(const row of traces){
            if(row.every(value => value === 1))
                return 1
            if(row.every(value => value === 2))
                return 2
        }
        return 0
    }
    const checkWinner = () => {
        const winConditionArray = [checkVertical(), checkHorizontal(), checkDiagonal()]
        if (winConditionArray.some((num) => num === 1))
            return 1;
        else if (winConditionArray.some((num) => num === 2))
            return 2;
        return 0;
    }

    return {getBoard, getCell, cellToArray, checkWinner}
})

const Cell = () => {
    let value = 0;
    const getValue = () => value;
    const setValue = (playerValue) => {
        value = playerValue;
    };
    const isAvailable = () => {
        return (value === 0) ? true : false
    }
    return {isAvailable, getValue, setValue};
}

const Player = (name = '', value = 0) => {
    const getName = () => name;
    const getValue = () => value;

    return { getName, getValue };
};


const GameController = (playerOneName = "Player 1", playerTwoName = "Player 2") => {
    // Game Controller
    const board = Gameboard();
    const players = [
        Player(playerOneName, 1),
        Player(playerTwoName, 2)
    ];
    let activePlayer = players[0];
    const getBoard = () => board
    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };
    const getActivePlayer = () => activePlayer;
    // const checkWinner = () => {

    // }
    const playRound = (row, column) => {
        // Game Logic
        // Check if the Cell is Available
        console.log(`${activePlayer.getName()}'s Turn`)
        const cell = getBoard().getCell(row, column)
        if(!cell.isAvailable()) 
            return false;
        // Check if There's a consecutive O's or X's
        cell.setValue(getActivePlayer().getValue())
        switchPlayerTurn();
        return true;
    };
    return {getBoard, playRound, getActivePlayer}
}

const game = GameController();
// Add Rows and Column in index html and add row and column attributes dynamically
let boardHTML = document.querySelector('#board');
for(let i = 0; i < 3; ++i){
    for(let j = 0; j < 3; ++j){
        const cell = document.createElement("div")
        cell.classList.add("cell")
        cell.setAttribute("row", i);
        cell.setAttribute("column", j);
        cell.addEventListener("click", ()=>{
            if(!game.playRound(i, j))
                return
            const playerValue = game.getBoard().getCell(i, j).getValue();
            const token = playerValue === 1 ? 'X' : 'O';
            cell.textContent = token;
            const winner = game.getBoard().checkWinner() 
            if(winner == 1)
                console.log("Player 1 Wins")
            else if (winner == 2)
                console.log("Player 2 Wins")
        })
        boardHTML.append(cell)
    }
}