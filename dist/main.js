/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "board", function() { return board; });
/* harmony import */ var _scripts_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/player */ "./src/scripts/player.js");

let board = [null, null, null, null, null, null, null, null, null];
let round = 0;
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

const names = [];

document.getElementById('submitBtn').addEventListener('click', (event) => {
  event.preventDefault();
  names[0] = document.getElementById('name1').value;
  names[1] = document.getElementById('name2').value;
  document.querySelector('.flying').style.display = 'none';
  document.querySelector('.content').classList.toggle('d-none');
});


const playerr = Object(_scripts_player__WEBPACK_IMPORTED_MODULE_0__["Player"])(names);

function GameBoard() {
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

  const tie = (board) => !board.some((item) => (item === null));

  const cleanBoard = () => {
    document.querySelectorAll('div.pixel').forEach(
      (element) => { element.innerText = ''; },
    );
    board = [null, null, null, null, null, null, null, null, null];
  };

  const replay = () => {
    cleanBoard();
    document.querySelector('div.footer').classList.toggle('d-none');
    document.querySelector('div.info').classList.toggle('d-none');
    document.querySelector('.board-cont').classList.toggle('pointer-none');
  };

  const render = () => {
    if (win(board)) {
      document.getElementById('info').innerText = `${playerr.turn(round)[1].charAt(0).toUpperCase() + playerr.turn(round)[1].slice(1)} Has Won The Game!`;
      document.querySelector('div.footer').classList.toggle('d-none');
      document.querySelector('div.info').classList.toggle('d-none');
      document.querySelector('.board-cont').classList.toggle('pointer-none');
    }
    if (!win(board) && tie(board)) {
      document.getElementById('info').innerText = 'It\'s a Tie Game!';
      document.querySelector('div.footer').classList.toggle('d-none');
      document.querySelector('div.info').classList.toggle('d-none');
      document.querySelector('.board-cont').classList.toggle('pointer-none');
    }
  };

  const game = (number) => {
    if (playerr.validMove(number, playerr.turn(round)[0])) { round += 1; }
    render();
  };

  return { cleanBoard, replay, game };
}

let boardElement = document.querySelector('#board');
// console.log(boardElement.);
// boardElement.forEach(console.log)

boardElement.addEventListener('click', (e) => {
    // gameLogic.game(id);
    
    gameLogic.game(e.target.attributes[1].nodeValue)
});

document.querySelector('#replay').addEventListener('click', () => {
  gameLogic.replay()
})

document.querySelector('#back').addEventListener('click', () => {
  document.location.reload()
})

document.querySelector('#restBtn').addEventListener('click', () => {
  gameLogic.cleanBoard()
  board = [null, null, null, null, null, null, null, null, null];
})


const gameLogic = GameBoard();


/* eslint no-unused-vars: "off" */



/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _populateBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./populateBoard */ "./src/scripts/populateBoard.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");




  const Player = (names) => {
  const person = (player, location) => {
    location = parseInt(location, 10);
    Object(_populateBoard__WEBPACK_IMPORTED_MODULE_0__["populateBoard"])(location, player)
    _index__WEBPACK_IMPORTED_MODULE_1__["board"][location] = player;
    return {
      array: _index__WEBPACK_IMPORTED_MODULE_1__["board"],
    };
  };

  const turn = (round) => {
    if (round % 2 === 0) {
      return ['X', names[0]];
    }
    return ['O', names[1]];
  };

  const validMove = (number, player) => {
    if (_index__WEBPACK_IMPORTED_MODULE_1__["board"].some((elem) => elem === null)) {
      if (_index__WEBPACK_IMPORTED_MODULE_1__["board"][number] === null) {
        person(player, number);
        return true;
      }
    }
    return false;
  };

  return {
    turn,
    validMove,
  };
}


/***/ }),

/***/ "./src/scripts/populateBoard.js":
/*!**************************************!*\
  !*** ./src/scripts/populateBoard.js ***!
  \**************************************/
/*! exports provided: populateBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "populateBoard", function() { return populateBoard; });

const populateBoard = (location, player) => {
  document.getElementById('board').children[location].innerText = player;
}


/***/ })

/******/ });
//# sourceMappingURL=main.js.map