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

    const resetBoard = () => {
        board.forEach((row) => {
            row.map((cell) => cell.setValue(0))
        })
    }

    const isBoardFull = () => {
        const boardArray = cellToArray();
        let isFull = true;
        for(const row of boardArray){
            if(row.some((value) => value == 0))
                isFull = false;
        }
        return isFull;
    }

    return {getBoard, getCell, cellToArray, checkWinner, isBoardFull, resetBoard}
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

const Player = (name = '', value = 0, score=0) => {
    const getName = () => name;
    const getValue = () => value;
    const getScore = () => score;
    const addScore = () => ++score;

    return { getName, getValue, getScore, addScore};
};


const GameController = (playerOneName = "Player 1", playerTwoName = "Player 2") => {
    // Game Controller
    const board = Gameboard();
    const players = [
        Player(playerOneName, 1),
        Player(playerTwoName, 2),
        Player("tie", 0)
    ];
    let activePlayer = players[0];
    const getPlayer = (player) => {
        switch(player){
            case 1:
                return players[0];
            case 2:
                return players[1];
            default:
                return players[2];
        }
    }
    const getScores = () => {
        return {"p1Score": players[0].getScore(),
                "p2Score": players[1].getScore(),
                "tieScore": players[2].getScore()
        }
    }
    const getBoard = () => board
    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };
    const getActivePlayer = () => activePlayer;
    const playRound = (row, column) => {
        // Game Logic
        // Check if the Cell is Available
        const cell = getBoard().getCell(row, column)
        if(!cell.isAvailable()) 
            return false;
        // Check if There's a consecutive O's or X's
        cell.setValue(getActivePlayer().getValue())
        switchPlayerTurn();
        return true;
    };
    const resetBoard = () => {
        board.resetBoard()
    }
    return {getBoard, playRound, getActivePlayer, getPlayer, getScores, resetBoard}
}

const viewController = (gameInstance) => {
    const game = gameInstance
    const updateScore = () => {
        // Get Score
        scores = game.getScores()
        // Get Div
        const scoreView = document.querySelectorAll(".score-value")
        for(const div of scoreView){
            switch(div.id) {
                case "p1-score":
                    div.textContent = scores.p1Score;
                    continue;
                case "p2-score":
                    div.textContent = scores.p2Score;
                    continue;
                case "tie-score":
                    div.textContent = scores.tieScore;
                    continue;
            }
        }
        // Update Div with Score
    }
    const createBoard = () => {
        let boardHTML = document.querySelector('#board');
        boardHTML.innerHTML = ''
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

                    // Check Winner, Notify Winner, Add Score
                    const winner = game.getBoard().checkWinner()
                    if([1,2].includes(winner)){
                        const winnerPlayer = game.getPlayer(winner)
                        winnerPlayer.addScore()
                        view.updateScore()
                        game.resetBoard()
                        view.createBoard()
                    } 
                    else if(game.getBoard().isBoardFull()){
                        game.getPlayer(0).addScore()
                        view.updateScore()
                        game.resetBoard()
                        view.createBoard()
                    }
                })
                boardHTML.append(cell)
            }
        }
    }
    return {createBoard, updateScore}
}

const game = GameController();
const view = viewController(game);

// Add Rows and Column in index html and add row and column attributes dynamically
view.createBoard()