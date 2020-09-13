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