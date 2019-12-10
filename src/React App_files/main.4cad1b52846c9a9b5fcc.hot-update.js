webpackHotUpdate("main",{

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Square_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Square.js */ "./src/Square.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fireWin_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fireWin.webp */ "./src/fireWin.webp");
/* harmony import */ var _fireWin_webp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fireWin_webp__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _waterWin_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./waterWin.gif */ "./src/waterWin.gif");
/* harmony import */ var _waterWin_gif__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_waterWin_gif__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dancing_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dancing.gif */ "./src/dancing.gif");
/* harmony import */ var _dancing_gif__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_dancing_gif__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/learn/Desktop/tic_tac_toe/src/gameboard.js";







class Gameboard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();

    this.handleIconLocation = index => {
      let _this$state = this.state,
          spaces = _this$state.spaces,
          gameOver = _this$state.gameOver,
          currentPlayer = _this$state.currentPlayer,
          players = _this$state.players;

      if (currentPlayer === players[1] && spaces[index] === "?" && gameOver === false) {
        spaces[index] = players[1];
        this.setState({
          spaces: spaces,
          currentPlayer: players[2]
        });
      } else if (currentPlayer === players[2] && spaces[index] === "?" && gameOver === false) {
        spaces[index] = players[2];
        this.setState({
          spaces: spaces,
          currentPlayer: players[1]
        });
      }

      const winner = num => {
        let gameOutcome = this.state.gameOutcome;

        if ((spaces[0] === players[num] && spaces[1] === players[num] && spaces[2] === players[num] || spaces[0] === players[num] && spaces[3] === players[num] && spaces[6] === players[num] || spaces[0] === players[num] && spaces[4] === players[num] && spaces[8] === players[num] || spaces[1] === players[num] && spaces[4] === players[num] && spaces[7] === players[num] || spaces[2] === players[num] && spaces[5] === players[num] && spaces[8] === players[num] || spaces[2] === players[num] && spaces[4] === players[num] && spaces[6] === players[num] || spaces[3] === players[num] && spaces[4] === players[num] && spaces[5] === players[num] || spaces[6] === players[num] && spaces[7] === players[num] && spaces[8] === players[num]) && gameOver === false) {
          this.setState({
            gameOver: true,
            gameOutcome: `${players[num]} is the winner!!`
          });
        }
      };

      const draw = () => {
        let _this$state2 = this.state,
            counter = _this$state2.counter,
            gameOver = _this$state2.gameOver,
            gameOutcome = _this$state2.gameOutcome;
        let newCount = counter + 1;
        this.setState({
          counter: newCount
        });

        if (counter === 8) {
          this.setState({
            gameOver: true,
            gameOutcome: "Draw! 💩"
          });
        }
      };

      draw();
      winner(1);
      winner(2);
    };

    this.restartGame = () => {
      this.setState({
        spaces: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
        gameOver: false,
        gameOutcome: null,
        counter: 0
      });

      const score = () => {
        let _this$state3 = this.state,
            players = _this$state3.players,
            player1Score = _this$state3.player1Score,
            player2Score = _this$state3.player2Score,
            gameOutcome = _this$state3.gameOutcome;

        if (gameOutcome === `${players[1]} is the winner!!`) {
          let newScore = player1Score + 1;
          this.setState({
            player1Score: newScore
          });
        } else if (gameOutcome === `${players[2]} is the winner!!`) {
          let newScore = player2Score + 1;
          this.setState({
            player2Score: newScore
          });
        }
      };

      score();
    };

    this.state = {
      spaces: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      gameOver: false,
      gameOutcome: null,
      players: {
        1: "🏹",
        2: "👹"
      },
      player1Score: 0,
      player2Score: 0,
      currentPlayer: "🏹",
      counter: 0
    };
  }

  render() {
    let _this$state4 = this.state,
        spaces = _this$state4.spaces,
        gameOutcome = _this$state4.gameOutcome,
        players = _this$state4.players;
    let square = spaces.map((value, index) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "square",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Square_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        value: value,
        index: index,
        key: index,
        handleIconLocation: this.handleIconLocation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }));
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, "Tic Tac Toe!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "scores",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, "Player ", this.state.players[1], " Score: ", this.state.player1Score), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, "Player ", this.state.players[2], " Score: ", this.state.player2Score)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "theWholeShabang",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "board",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, !this.state.gameOver && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "gameBoard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, square), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, this.state.gameOver && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "outcomeBoard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, this.state.gameOutcome, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _dancing_gif__WEBPACK_IMPORTED_MODULE_5___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.restartGame,
      id: "button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, "Restart Game"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Gameboard);

/***/ })

})
//# sourceMappingURL=main.4cad1b52846c9a9b5fcc.hot-update.js.map