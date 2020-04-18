import React, {useState} from 'react';
import './App.css';
import PlayerList from './components/PlayerList';
import {useDarkMode} from './hooks/useDarkMode';

function App() {
  

  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleDarkMode = e => {
    e.preventDefault();

    setDarkMode(!darkMode);
  }

  return (
    <div className="App">
      <div className='dark-mode__toggle'>
        <div onClick={toggleDarkMode} className={darkMode ? 'toggle toggled' : 'toggle'}></div>
      </div>
      <div className="App-div">
        <PlayerList />
      </div>
    </div>
    )
}

export default App;
