const board = ["X", "X", "X", "O", "O", "O", "X", "X", "X"];
const game_board_container = document.getElementById("boardContainer");
const board_cells = document.getElementsByClassName(".block"); 


function renderingBoard(board-container)
{
for (let i = 0; i < boardContainer.length; i++) 
    {
        const row = document.createElement("div");
      for(let j = 0; j < boardContainer[i].length; j++)
      {
        const col = document.createElement("span");
      }
      col.textContent = boardContainer[i][j];

      
        // cell.classList.add("block");
        // cell.textContent = board[i];
       //game_board_container.appendChild(cell);
    }
}
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