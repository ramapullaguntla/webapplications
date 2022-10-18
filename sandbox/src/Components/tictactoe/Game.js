import React from 'react';
import Square from './Square';
import { useState, setState } from 'react';
import './Game.css';
class Game extends React.Component
{
    renderSquares = () =>
    {        
        return(
            <div>
        <div className="each-row">
            <Square displayvalue={this.state.squares[0]} index='0' clicked={this.onSquareClicked}/>
            <Square displayvalue={this.state.squares[1]} index='1' clicked={this.onSquareClicked}/>
            <Square displayvalue={this.state.squares[2]} index='2' clicked={this.onSquareClicked}/>
        </div>
        <div className="each-row">
            <Square displayvalue={this.state.squares[3]} index='3' clicked={this.onSquareClicked}/>
            <Square displayvalue={this.state.squares[4]} index='4' clicked={this.onSquareClicked}/>
            <Square displayvalue={this.state.squares[5]} index='5' clicked={this.onSquareClicked}/>
        </div>
        <div className="each-row">
            <Square displayvalue={this.state.squares[6]} index='6' clicked={this.onSquareClicked}/>
            <Square displayvalue={this.state.squares[7]} index='7'clicked={this.onSquareClicked}/>
            <Square displayvalue={this.state.squares[8]} index='8' clicked={this.onSquareClicked}/>
        </div>
        </div>
        );
    }

    state = {
        nextTurn: 'X',
        squares: Array(9).fill(null),
        winner: ''
    };

    onSquareClicked = (e) =>
    {
        const newsquares = this.state.squares.slice();
        if(newsquares[e] === null)
        {
          newsquares[e] = this.state.nextTurn;
        }
        

        var isgameover = this.verifyGameOver(newsquares);

        if(!isgameover)
        {
            this.setState((prev) => {
                return {
                    nextTurn: prev.nextTurn === 'X'? 'O': 'X',
                    squares: newsquares
                };
            }
            );
        }
        else
        {
            var gameWinner = this.state.nextTurn;
            this.setState(
                {
                    squares: newsquares,
                    winner: gameWinner
                }
            );
        }

        


    }

    verifyGameOver = (squareArray) =>
    {
        var isOver = false;
        //Check if the game is over
        if(squareArray[0] != null && squareArray[0] === squareArray[1] && squareArray[0] === squareArray[2])
        {
            isOver = true;
        }

        if(squareArray[0] != null && squareArray[0] === squareArray[3] && squareArray[0] === squareArray[6])
        {
            isOver = true;
        }

        if(squareArray[0] != null && squareArray[0] === squareArray[4] && squareArray[0] === squareArray[8])
        {
            isOver = true;
        }

        if(squareArray[6] != null && squareArray[6] === squareArray[7] && squareArray[6] === squareArray[8])
        {
            isOver = true;
        }

        if(squareArray[2] != null && squareArray[2] === squareArray[5] && squareArray[2] === squareArray[8])
        {
            isOver = true;
        }

        return isOver;
    }

    render()
    {
        var msg = this.state.winner === ''? "Next turn " + this.state.nextTurn : "Game Over.. Winner is " + this.state.winner;
        return(
            <div>
                <h1>{msg}</h1>
                {this.renderSquares()}
            </div>
           
        );
    }
}

export default Game;