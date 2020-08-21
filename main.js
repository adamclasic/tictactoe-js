const board = [null, null, null, null, null, null, null, null, null];
let round = 0;
const winComb = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
];

let gameBoard = (player, location) => {
    location = parseInt(location);
    board[location] = player;
    document.getElementById('board').children[location].innerText = player;
    return {
        'array': board
    }
};

let turn = (round) => {
    if (round%2 == 0){
        return 'X';
    }else {
        return 'O'; 
    }
};

let move = (number, player) => {
    let roundNum = 0;
    if (board.some((elem) => elem === null)) {
        if (board[number] === null) {
            gameBoard(player , number);
            return true;
        } else {
            alert('choose empty spot');
            return false;
        };
    }else {
        alert('tie reload to restart');
    };
};

let win = (array) => {
    let hasWon = false;
    winComb.forEach((item) => {
        let testArr = [];
        for (let i = 0; i<item.length; i++) {
            testArr.push(array[item[i]]);
        };
        if (testArr.every((x) => (x == 'X'))) {
            hasWon =  true;
        } else if (testArr.every((x) => (x == 'O'))) {
            hasWon =  true;
        }
    });
    return hasWon;
};

let tie = (board) => {return !board.some((item) => (item == null))};
let game = (number) => {
    if (move(number, turn(round))){ round++;};
    if (win(board)) {
        document.getElementById("info").innerText = `${turn(round)} Has Won The Game!`
        document.getElementById('board').style.pointerEvents = 'none';
        document.getElementById('replay').style.display = 'unset';
    }
    if (tie(board)) {
        document.getElementById('replay').style.display = 'unset';
        document.getElementById("info").innerText = `It's a Tie Game!`

    }
}
