(function (){

    "use strict"

    const Player = (sign) => {
        this.sign = sign;

        const getSign = () => {
            return sign;
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

        let currentPlayer = "X";
        const squares = document.querySelectorAll(".square");

        const updateBoard = () => {
            for (let i = 0; i < squares.length; i++) {
                squares[i].textContent = gameBoard.getSquare(i);
            }
        };

        for (let i = 0; i < squares.length; i++) {
            squares[i].addEventListener("click", function(){
                if (!(gameBoard.getSquare(i) === "")) return
                gameBoard.setSquare(i,currentPlayer);
                updateBoard();
                (currentPlayer === "X") ? currentPlayer = "Y" : currentPlayer = "X";
            });
        };


    })();


})();