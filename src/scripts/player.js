
import { populateBoard } from './populateBoard';
// import { board } from '../index';

const Player = (names, board) => {
  const person = (player, location) => {
    location = parseInt(location, 10);
    populateBoard(location, player);
    board[location] = player;
    return {
      array: board,
    };
  };
  
  const turn = (round) => {
    if (round % 2 === 0) {
      return ['X', names[0]];
    }
    return ['O', names[1]];
  };
  
  const validMove = (number, player) => {
    if (board.some((elem) => elem === null)) {
      if (board[number] === null) {
        person(player, number);
        return true;
      }
    }
    return false;
  };
  
  return {
    turn,
    validMove,
  };
};
export { Player };