const winComb = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];
const win = (array) => {
  let hasWon = false;
  winComb.forEach((item) => {
    const testArr = [];
    for (let i = 0; i < item.length; i += 1) {
      testArr.push(array[item[i]]);
    }
    if (testArr.every((x) => (x === 'X'))) {
      hasWon = true;
    } else if (testArr.every((x) => (x === 'O'))) {
      hasWon = true;
    }
  });
  return hasWon;
};
export {win};