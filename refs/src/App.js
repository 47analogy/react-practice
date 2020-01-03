import React, { useState } from 'react';
import './App.css';
import usePrevious from './components/usePrevious';

function App() {
  const [player, setPlayer] = useState(['Judge', 'Cole', 'Stanton']);

  const prevPlayer = usePrevious(player);

  return (
    <div className='App'>
      <button onClick={() => setPlayer([...player, ...'Sanchez'])}>
        Add Player
      </button>
      <h2>Quartet: {player}</h2>
      <h2>Trio: {prevPlayer}</h2>
    </div>
  );
}

export default App;
