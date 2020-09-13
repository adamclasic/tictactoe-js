import { populateBoard } from './scripts/populateBoard';

// let board = [null, null, null, null, null, null, null, null, null];
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

const turn = (round) => {
  if (round % 2 === 0) {
    return ['X', names[0]];
  }
  return ['O', names[1]];
};


const person = (player, location) => {
  location = parseInt(location, 10);
  populateBoard(location, player);
  gameLogic.board[location] = player;
  return {
    array: gameLogic.board,
  };
};
const validMove = (number, player, board) => {
  if (board.some((elem) => elem === null)) {
    if (board[number] === null) {
      person(player, number);
      return true;
    }
  }
  return false;
};
const Player = (names) => {
};


const playerr = Player(names);


function GameBoard() {
  let board = [null, null, null, null, null, null, null, null, null];
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
  
  return { game , board, win, tie};
}

  const cleanBoard = () => {

    gameLogic.board = [null, null, null, null, null, null, null, null, null];
  };

  const game = (number, board) => {
    if (validMove(number, turn(round)[0], board)) { round += 1; }
    render();
  };


const render = () => {
  if (gameLogic.win(gameLogic.board)) {
    document.getElementById('info').innerText = `${turn(round)[1].charAt(0).toUpperCase() + turn(round)[1].slice(1)} Has Won The Game!`;
    document.querySelector('div.footer').classList.toggle('d-none');
    document.querySelector('div.info').classList.toggle('d-none');
    document.querySelector('.board-cont').classList.toggle('pointer-none');
  }
  if (!gameLogic.win(gameLogic.board) && gameLogic.tie(gameLogic.board)) {
    document.getElementById('info').innerText = 'It\'s a Tie Game!';
    document.querySelector('div.footer').classList.toggle('d-none');
    document.querySelector('div.info').classList.toggle('d-none');
    document.querySelector('.board-cont').classList.toggle('pointer-none');
  }
};

const cleanDomBoard = () => {
  document.querySelectorAll('div.pixel').forEach(
    (element) => { element.innerText = ''; },
  );
}


const boardElement = document.querySelector('#board');

boardElement.addEventListener('click', (e) => {
  console.log(gameLogic.board);
  gameLogic.game(e.target.attributes[1].nodeValue, gameLogic.board);
});

document.querySelector('#replay').addEventListener('click', () => {
  cleanBoard();
  cleanDomBoard();
  document.querySelector('div.footer').classList.toggle('d-none');
  document.querySelector('div.info').classList.toggle('d-none');
  document.querySelector('.board-cont').classList.toggle('pointer-none');
});

document.querySelector('#back').addEventListener('click', () => {
  document.location.reload();
});

document.querySelector('#restBtn').addEventListener('click', () => {
  cleanDomBoard();
  cleanBoard();
});


const gameLogic = GameBoard();


/* eslint no-unused-vars: "off" */
