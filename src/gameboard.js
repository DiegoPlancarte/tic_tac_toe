import React from 'react';
import Square from './Square.js'
import './App.css';
import FireWin from './fireWin.webp'
import WaterWin from './waterWin.gif'
import Dancing from './dancing.gif'
import Jesus from './jesus.gif'

class Gameboard extends React.Component{
    constructor(){
        super()
        this.state ={
            spaces: ["?","?","?","?","?","?","?","?","?"],
            gameOver: false,
            gameOutcome: null,
            players: {
                      1: "🗡",
                      2: "👹"},
            player1Score: 0,
            player2Score: 0,
            currentPlayer: "🗡",
            counter: 0
        }
    }

    handleIconLocation = (index) => {
      let { spaces, gameOver, currentPlayer, players } = this.state
      if (currentPlayer === players[1] && spaces[index] === "?" && gameOver === false) {
        spaces[index] = players[1]
        this.setState({
          spaces: spaces,
          currentPlayer: players[2]
        })
      } else if (currentPlayer === players[2] && spaces[index] === "?" && gameOver === false) {
        spaces[index] = players[2]
        this.setState({
          spaces: spaces,
          currentPlayer: players[1]
        })
      }

      const winner = (num) => {
          let { gameOutcome } = this.state
        if (
          (spaces[0]===players[num] && spaces[1]===players[num] && spaces[2]===players[num] ||
          spaces[0]===players[num] && spaces[3]===players[num] && spaces[6]===players[num] ||
          spaces[0]===players[num] && spaces[4]===players[num] && spaces[8]===players[num] ||
          spaces[1]===players[num] && spaces[4]===players[num] && spaces[7]===players[num] ||
          spaces[2]===players[num] && spaces[5]===players[num] && spaces[8]===players[num] ||
          spaces[2]===players[num] && spaces[4]===players[num] && spaces[6]===players[num] ||
          spaces[3]===players[num] && spaces[4]===players[num] && spaces[5]===players[num] ||
          spaces[6]===players[num] && spaces[7]===players[num] && spaces[8]===players[num])
          && gameOver === false) {
          this.setState({ gameOver: true, gameOutcome: `${players[num]} is the winner!!`})
        }
      }
      const draw =() =>{
        let { counter, gameOver, gameOutcome } = this.state
        let newCount =  counter + 1
        this.setState({counter: newCount})
        if (counter === 8) {
        this.setState({gameOver: true, gameOutcome: "Draw! 💩"})
        }
      }
        draw()
        winner(1)
        winner(2)
      }

    restartGame = () => {
    this.setState({
      spaces: ["?","?","?","?","?","?","?","?","?"],
      gameOver: false,
      gameOutcome: null,
      counter: 0,
      })

      const score = () => {
        let { players, player1Score, player2Score, gameOutcome } = this.state
        if (gameOutcome === `${players[1]} is the winner!!`){
        let newScore =  player1Score + 1
        this.setState({player1Score: newScore})
    } else if (gameOutcome === `${players[2]} is the winner!!`){
        let newScore =  player2Score + 1
        this.setState({player2Score: newScore})}
    }

      score()
    }

    render(){
        let { spaces, gameOutcome, players } = this.state
        let square = spaces.map((value,index) => {
            return(
                <div className="square">
                    < Square
                        value = { value }
                        index = { index }
                        key = { index }
                        handleIconLocation = { this.handleIconLocation }
                    />
                </div>
            )
        })

        return(
            <div>
            <h1>Tic Tac Revelations</h1>
              <div id="scores">
                <h2>Player {this.state.players[1]} Score: {this.state.player1Score}</h2>
                <h2>Player {this.state.players[2]} Score: {this.state.player2Score}</h2>
              </div>
            <div id= "theWholeShabang">
                <div id = "board">
                { !this.state.gameOver &&
                    <div id="gameBoard">
                    { square }
                    </div>
                }
                <div>
                { this.state.gameOver &&
                <div id="outcomeBoard">
                    { this.state.gameOutcome }
                    <br />
                    <img src={Jesus} />
                </div>
                }
                </div>
                <br />
                <button onClick = { this.restartGame } id= "button">
                Restart Game
                </button>
                </div>
                </div>
            </div>
            )
        }
    }

export default Gameboard;
