import React from 'react';
import axios from 'axios';
import Player from './Player';

class PlayerList extends React.Component {
    constructor() {
        console.log('constructor runs')
    
        super();
    
        this.state = {
          player: [],
        }
      };

      componentDidMount() {
        console.log('componentDidMount');
    
        axios.get('http://localhost:5000/api/players')
        .then(players => {
          console.log('player:', players);
    
          this.setState({player: players.data});
        })
        .catch(err => console.log('componentDidMount Err', err));
      };
    
      render() {
      return (
        <div className="App">
          <nav></nav>
          <div className="App-div">
            {this.state.player.map(player => {
              return(
                <Player player={player}/>
              )
            })}
          </div>
        </div>
      );
      }
}

export default PlayerList;