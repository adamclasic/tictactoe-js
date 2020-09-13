import { populateBoard } from './populateBoard';
import {turn} from './turn'
function GameBoard(boardd) {
  let board = boardd;
  let round = 0;
  let names = ['',''];
  const person = (player, location) => {
    console.log(player);
    console.log(board[location]);
    location = parseInt(location, 10);
    populateBoard(location, player);
    board[location] = player;
    console.log(board);
    return {
      array: board,
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
  
  const game = (number, board) => {
    if (validMove(number, turn(round, names)[0], board)) { round += 1; }
    console.log(round)
  };
  return { board, game, round, names};
}

export { GameBoard };
