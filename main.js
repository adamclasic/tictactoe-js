const board = [null, null, null, null, null, null, null, null, null];

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
        return 'x';
    }else {
        return 'o';
    }
};

let move = (number, player) => {
    if (board.some((elem) => elem === null)) {
        if (board[number] === null) {
            gameBoard(player , number);
        } else {
            alert('choose empty spot');
        };
    }else {
        alert('tie reload to restart');
    };
};

let round = 0;
let game = (number) => {
    // for (let k=0;k>i;i++) { }
    round++;
    move(number, turn(round));
}
