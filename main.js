let Player = require( './scripts/player');
let board = [null, null, null, null, null, null, null, null, null];
let round = 0;
const winComb = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

const names = [];

document.getElementById('submitBtn').addEventListener('click', (event) => {
  event.preventDefault();
  names[0] = document.getElementById('name1').value;
  names[1] = document.getElementById('name2').value;
  document.querySelector('.flying').style.display = 'none';
  document.querySelector('.content').classList.toggle('d-none');
});


const playerr = Player();

function GameBoard() {
  const win = (array) => {
    let hasWon = false;
    winComb.forEach((item) => {
      const testArr = [];
      for (let i = 0; i < item.length; i += 1) {
        testArr.push(array[item[i]]);
      }
      if (testArr.every((x) => (x === 'X'))) {
        hasWon = true;
      } else if (testArr.every((x) => (x === 'O'))) {
        hasWon = true;
      }
    });
    return hasWon;
  };

  const tie = (board) => !board.some((item) => (item === null));

  const cleanBoard = () => {
    document.querySelectorAll('div.pixel').forEach(
      (element) => { element.innerText = ''; },
    );
    board = [null, null, null, null, null, null, null, null, null];
  };

  const replay = () => {
    cleanBoard();
    document.querySelector('div.footer').classList.toggle('d-none');
    document.querySelector('div.info').classList.toggle('d-none');
    document.querySelector('.board-cont').classList.toggle('pointer-none');
  };

  const render = () => {
    if (win(board)) {
      document.getElementById('info').innerText = `${playerr.turn(round)[1].charAt(0).toUpperCase() + playerr.turn(round)[1].slice(1)} Has Won The Game!`;
      document.querySelector('div.footer').classList.toggle('d-none');
      document.querySelector('div.info').classList.toggle('d-none');
      document.querySelector('.board-cont').classList.toggle('pointer-none');
    }
    if (!win(board) && tie(board)) {
      document.getElementById('info').innerText = 'It\'s a Tie Game!';
      document.querySelector('div.footer').classList.toggle('d-none');
      document.querySelector('div.info').classList.toggle('d-none');
      document.querySelector('.board-cont').classList.toggle('pointer-none');
    }
  };

  const game = (number) => {
    if (playerr.validMove(number, playerr.turn(round)[0])) { round += 1; }
    render();
  };

  return { cleanBoard, replay, game };
}

const gameLogic = GameBoard();


/* eslint no-unused-vars: "off" */

// export { winComb };