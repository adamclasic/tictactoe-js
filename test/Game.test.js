import { GameBoard } from '../src/scripts/Game';

describe('should check is a valide move', () => {
  let gameLogic =  GameBoard([null, null, null, null, null, null, null, null, null]);
  
  it('should return the board array', () => {
    expect(gameLogic.board).toStrictEqual([null, null, null, null, null, null, null, null, null]);
  });
  
  gameLogic.game(5, gameLogic.board);
  
  it('should add X to index 5', () => {
    expect(gameLogic.board).toStrictEqual([null, null, null, null, null, 'X', null, null, null]);
  });
});