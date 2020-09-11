import { winComb } from './main';

// console.log(winComb)
describe('should convert number to a letter', () => {
  it('should x when the player is number is even', () => {
    expect(winComb).toEqual([
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ])
  });
});