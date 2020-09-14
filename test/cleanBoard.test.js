import { cleanBoard } from '../src/scripts/cleanBoard';

describe('should reset the board', () => {
  const board = cleanBoard([null, null, null, null, "X", null, "O", "X", null]);
  it('should return an array of 9 nulls', () => {
    expect(board).toStrictEqual([null, null, null, null, null, null, null, null, null]);
  });
});