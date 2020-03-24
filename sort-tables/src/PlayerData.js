import React, { useState, useEffect } from 'react';
import PlayerTable from './PlayerTable';

const playerInfo = [
  { id: 1, name: 'Gerrit Cole', position: 'Pitcher', number: 45 },
  { id: 2, name: 'Gary Sanchez', position: 'Catcher', number: 24 },
  { id: 3, name: 'Aaron Judge', position: 'Outfield', number: 99 },
];

const PlayerInfo = () => {
  const [players, setPlayers] = useState([]);

  // faking api call
  useEffect(() => {
    setPlayers(playerInfo);
  }, []);

  return <PlayerTable players={players} />;
};

export default PlayerInfo;
