import React from 'react';
import './App.css';

class App extends React.Component 
{
  render()
  {
    return (
      <Board />      
    );
  }
}

class Square extends React.Component
{  
  render()
  {
    return(
      <button className="each-square" onClick={this.props.onClick} >{this.props.nodevalue}</button>
    );
  }
}

class Board extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      squares: new Array(9).fill(null),
      isXNext: true,
    };
  }
  render()
  {   
    var status = "Next Player: O";
    if(this.state.isXNext)
    {
      status = "Next Player: X";
    }
    var winner = this.calculateWinner();
    if(winner)
    {
      status = "Game Over.. Winner is " + winner;     
    }
    
    
    return(
      <div>
        <h2>{status}</h2>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}  
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}         
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}    
        </div>
      </div>
    )
  }

  renderSquare(i)
  {
    return(
    <Square nodevalue={this.state.squares[i]} onClick = {() => this.handleClick(i)}/>
    );
  }

  handleClick(i)
  {
     const currentSquares = this.state.squares.slice();
     var isXNext = this.state.isXNext;
     if(!currentSquares[i])
     {
       currentSquares[i] = isXNext ? 'X' : 'O';
     }     
     else
     {
       return;
     }
     this.setState({
       squares: currentSquares,
       isXNext: !isXNext
     });     
  }

  calculateWinner()
  {
     const currentSquares = this.state.squares.slice();     
     if(currentSquares[0] && currentSquares[0] === currentSquares[1] && currentSquares[0] === currentSquares[2])
     {
        return this.state.squares[0];      
     }
     if(currentSquares[0] && currentSquares[0] === currentSquares[4] && currentSquares[0] === currentSquares[8])
     {
      return this.state.squares[0];
     }
     if(currentSquares[0] && currentSquares[0] === currentSquares[3] && currentSquares[0] === currentSquares[6])
     {
      return currentSquares[0];
     }
     return null;
     
  }
  
}

export default App;
