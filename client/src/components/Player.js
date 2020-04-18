import React from 'react';
import styled from 'styled-components';

const PlayerCard = styled.div`
    display: flex;
    flex-direction: column;
    border 1px solid blue;
    width: 50%;
    margin: 2% 0 2% 25%;
    border-radius: 10px;
`;

const Player = ({player}) => {
    return (
        <div className='PlayerCard'>
            <PlayerCard>
                <h1>Name of Soccer Player:</h1>
                <h2>{player.name}</h2>
                <h1>Women's World Cup Team:</h1>
                <h2>{player.country}</h2>
            </PlayerCard>
        </div>
    )
}

export default Player;