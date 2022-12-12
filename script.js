(function (){

    "use strict"

    const gameBoard = (() => {

        let board = ["X","O","X","X","O","X","X","O","X"];

        const getBoard = () => {
            return board
        };

        const getSquare = (i) => {
            return board[i]
        };

        const resetBoard = () => {
            for (let i = 0; i < board.length; i++) {
                board[i] = "";
            }
        };

        return {
            getBoard,
            getSquare,
            resetBoard
        };

    })();

    const displayController = (() => {

        const squares = document.querySelectorAll(".square");

        const updateBoard = () => {
            for (let i = 0; i < squares.length; i++) {
                squares[i].textContent = gameBoard.getSquare(i);
            }
        };

    })();


})();