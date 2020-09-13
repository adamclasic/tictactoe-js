import { win } from '../src/scripts/win';

describe('should return true if someone won the game', () => {
  const whenWin = win(["X", null, null, "O", "X", "O", "O", "X", "X"]);
  const whenNoWin = win(["O", "X", "X", "X", "O", "O", "X", "O", "X"]);
  it('should rewin an O when number is even', () => {
    expect(whenNoWin).toBeFalsy;
  });

  it('should rewin an X when number is odd', () => {
    expect(whenWin).toBeTruthy;
  });
});
