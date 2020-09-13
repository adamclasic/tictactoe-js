
const populateBoard = (location, player) => {
  document.getElementById('board').children[location].innerText = player;
};
export { populateBoard };