import { turn } from './turn';

function GameBoard(boardd) {
  const board = boardd;
  let round = 0;
  const names = ['', ''];
  const person = (player, location) => {
    location = parseInt(location, 10);
    board[location] = player;
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
  };
  return {
    board, game, round, names,
  };
}

export { GameBoard };
