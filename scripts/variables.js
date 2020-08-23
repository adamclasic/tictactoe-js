
let variables = () => {
    return {
        board: [null, null, null, null, null, null, null, null, null],
        round: 0,
        winComb: [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [6, 4, 2],
        ],
        names: ''
    }
};

export {variables};