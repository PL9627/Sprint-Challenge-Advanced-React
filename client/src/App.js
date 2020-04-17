import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    console.log('constructor runs')

    super();

    this.state = {
      player: []
    }
  };

  componentDidMount() {
    console.log('componentDidMount');

    axios.get('http://localhost:5000/api/players')
    .then(players => {
      console.log('players:', players);
    })
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
  }
}

export default App;
