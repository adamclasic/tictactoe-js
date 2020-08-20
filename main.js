let board = [null, null, null, null, null, null, null, null, null];

let gameBoard = (player, location) => {
    location = parseInt(location);
    board[location] = player;
    document.getElementById('board').children[location].innerText = player;
    return {
        'array': board
    }
};

let game = () => {
    
};