(function (){

    "use strict"

    const Player = (sign) => {
        let _sign = sign;

        const getSign = () => {
            return _sign;
        };

        return {
            getSign
        };
    }

    const gameBoard = (() => {

        let board = ["","","","","","","","",""];

        const getBoard = () => {
            return board
        };

        const getSquare = (i) => {
            return board[i]
        };

        const setSquare = (i, sign) => {
            if (!(board[i]==="")) return
            board[i] = sign;
        };

        const resetBoard = () => {
            for (let i = 0; i < board.length; i++) {
                board[i] = "";
            }
        };

        return {
            getBoard,
            getSquare,
            setSquare,
            resetBoard
        };

    })();

    const displayController = (() => {

        const playerX = Player("X");
        const playerO = Player("O");

        let currentPlayer = playerX;
        const squares = document.querySelectorAll(".square");

        const updateBoard = () => {
            for (let i = 0; i < squares.length; i++) {
                squares[i].textContent = gameBoard.getSquare(i);
            }
        };

        for (let i = 0; i < squares.length; i++) {
            squares[i].addEventListener("click", function(){
                if (!(gameBoard.getSquare(i) === "")) return
                gameBoard.setSquare(i,currentPlayer.getSign());
                updateBoard();
                (currentPlayer === playerX) ? currentPlayer = playerO : currentPlayer = playerX;
            });
        };


    })();


})();