import { turn } from '../src/scripts/turn';

describe('should return X or O ', () => {
  const whenEven = turn(3, ['Adam', 'Brittany']);
  const whenOdd = turn(8, ['Adam', 'Brittany']);
  it('should return an O when number is even', () => {
    expect(whenEven).toStrictEqual(["O", "Brittany"]);
  });

  it('should return an X when number is odd', () => {
    expect(whenOdd).toStrictEqual(["X", "Adam"]);
  });
});