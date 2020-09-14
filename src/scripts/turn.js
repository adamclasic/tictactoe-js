const turn = (round, names) => {
  if (round % 2 === 0) {
    return ['X', names[0]];
  }
  return ['O', names[1]];
};

export { turn };