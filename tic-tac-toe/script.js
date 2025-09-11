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
    const getCell = (row, column) => board[row][column]
    const printBoard = () => {
        for(let i=0; i<row; ++i){
            console.log(`${board[i][0].getValue()} ${board[i][1].getValue()} ${board[i][2].getValue()}\n`)
        }
    }

    return {getBoard, getCell, printBoard}
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
    const playRound = (row, column) => {
        // Game Logic
        // Check if the Cell is Available
        console.log(`${activePlayer.getName()}'s Turn`)
        const cell = getBoard().getCell(row, column)
        if(!cell.isAvailable()) 
            return
        cell.setValue(getActivePlayer().getValue())
        board.printBoard();
        switchPlayerTurn();
    };
    return {getBoard, playRound, getActivePlayer}
}

const game = GameController();