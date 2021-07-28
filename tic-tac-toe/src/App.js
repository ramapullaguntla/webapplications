import React from 'react';
import './App.css';

class App extends React.Component 
{
  render()
  {
    return (
      <Board/>      
    );
  }
}

class Square extends React.Component
{
  render()
  {
    return(
      <button className="each-square">{this.props.nodevalue}</button>
    );
  }
}

class Board extends React.Component
{
  render()
  {
    return(
      <div className="eachrow">
        <div>
          <Square nodevalue="1"/>
          <Square nodevalue="2"/>
          <Square nodevalue="3"/>    
        </div>
        <div>
          <Square nodevalue="4"/>
          <Square nodevalue="5"/>
          <Square nodevalue="6"/>      
        </div>
        <div>
          <Square nodevalue="7"/>
          <Square nodevalue="8"/>
          <Square nodevalue="9"/>    
        </div>
      </div>
    )
  }
}

export default App;
