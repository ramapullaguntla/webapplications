import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import ClassComponentExample from './Components/ClassComponentExample';

class AppClass extends Component
{
    constructor()
    {
      super();
    }

    state = {
      name : "Rama",
      job : "Developer"
    }

    render()
    {
      return (
      <div className="App">
      <header className="App-header">        
        <ClassComponentExample/>
      </header>
    </div>);
    };
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default AppClass;
