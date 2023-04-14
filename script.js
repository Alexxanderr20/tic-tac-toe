const board = ["X", "X", "X", "O", "O", "O", "X", "X", "X"];
const game_board_container = document.getElementById("board-container");
const board_cells = document.getElementsByClassName(".block"); 



// const gameboard = (() => {
//   const board = ["X", "X", "X", "O", "O", "O", "X", "X", "X"];
//   const getBoard = () => board;
//   const setBoard = (index, player) => {
//     board[index] = player;
//   };
//   return { getBoard, setBoard };
// });

// const displayController = (() => {
//     const board = gameboard.getBoard();
//     const cells = document.querySelectorAll(".cell");
//     const displayBoard = () => {
//         cells.forEach((cell, index) => {
//         cell.textContent = board[index];
//         });
//     };
//     return { displayBoard };
// });

// const renderBoard = () => { 