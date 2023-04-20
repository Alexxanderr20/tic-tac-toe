
function renderBoard()
{
  let winner = false;
  let draw = false;
  let loser = false;

  const humanPlayer = "X";
  const computerPlayer = "O";
  const gameBoard = document.querySelectorAll('.spot');

  var board = [
  ["","",""],
  ["","",""],
  ["","",""]
];

 }

 function startGame()
 {
  spot.forEach(() => {
    spot.innerHTML = '';
    spot.addEventListener('click', handleClick.bind(null,spot, index));
  });
 }
