import { tie } from '../src/scripts/tie';

describe('should check if ther\'s any room left', () => {
  it('should return false', () => {
    expect(tie([null, null, null, null, "X", null, "O", "X", null])).toBeFalsy;
  });

  it('should return true', () => {
    expect(tie(["X", "O", "X", "O", "X", "O", "O", "X", "X"])).toBeFalsy;
  });
});