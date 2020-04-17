import React from 'react';

const Player = ({player}) => {
    return (
        <div>
            <div>
                <h1>Name of Soccer Player:</h1>
                <h2>{player.name}</h2>
                <h1>Women's World Cup Team:</h1>
                <h2>{player.country}</h2>
            </div>
        </div>
    )
}

export default Player;