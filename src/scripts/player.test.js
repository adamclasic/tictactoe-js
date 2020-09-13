import { Player } from './player';

describe('should convert number to a letter', () => {
  it('should x when the player is number is even', () => {
    expect(Player.turn(1)).toEqual('x');
  });
});