import React from 'react';

import Board from "./components/Board";
import BoardGame from './components/BoardGame';

//Board should have 3 components
//1. header, 2. Dices 3. Roll button
//

function App() {
  return (
    <div className="App">
      <BoardGame />
    </div>
  );
}

export default App;
