import {win} from './scripts/win'
import {turn} from './scripts/turn'
import {tie} from './scripts/tie'
import {cleanBoard} from './scripts/cleanBoard'
import {GameBoard} from './scripts/GameBoard'

let gameLogic =  GameBoard([null, null, null, null, null, null, null, null, null]);

document.getElementById('submitBtn').addEventListener('click', (event) => {
  event.preventDefault();
  gameLogic.names[0] = document.getElementById('name1').value;
  gameLogic.names[1] = document.getElementById('name2').value;
  document.querySelector('.flying').style.display = 'none';
  document.querySelector('.content').classList.toggle('d-none');
});

const render = () => {
  if (win(gameLogic.board)) {
    document.getElementById('info').innerText = 
    `${turn(gameLogic.round, gameLogic.names)[1].charAt(0).toUpperCase() + turn(gameLogic.round, gameLogic.names)[1].slice(1)} Has Won The Game!`;
    document.querySelector('div.footer').classList.toggle('d-none');
    document.querySelector('div.info').classList.toggle('d-none');
    document.querySelector('.board-cont').classList.toggle('pointer-none');
  }
  if (!win(gameLogic.board) && tie(gameLogic.board)) {
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
  gameLogic.game(e.target.attributes[1].nodeValue, gameLogic.board);
  render();

});

document.querySelector('#replay').addEventListener('click', () => {
  gameLogic = GameBoard(cleanBoard([null, null, null, null, null, null, null, null, null]));
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
  gameLogic = GameBoard(cleanBoard([null, null, null, null, null, null, null, null, null]));
});

/* eslint no-unused-vars: "off" */
