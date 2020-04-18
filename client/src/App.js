import React, {useState} from 'react';
import './App.css';
import PlayerList from './components/PlayerList';
import {useDarkMode} from './hooks/useDarkMode';
import styled from 'styled-components';

const DarkMode = styled.div`
  margin: 2% 0 2% 2%;
`;

function App() {
  

  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleDarkMode = e => {
    e.preventDefault();

    setDarkMode(!darkMode);
  }

  return (
    <div className="App">
      <DarkMode className='dark-mode__toggle'>
        <div onClick={toggleDarkMode} className={darkMode ? 'toggle toggled' : 'toggle'}></div>
      </DarkMode>
      <div className="App-div">
        <PlayerList />
      </div>
    </div>
    )
}

export default App;
