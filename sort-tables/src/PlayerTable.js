import React from 'react';

const PlayerTable = props => {
  const { players } = props;

  const [sortedColumn, setSortedColumn] = React.useState(null); // sort by different columns

  let sortedPlayers = [...players]; // copy of props to display sorted players

  if (sortedColumn !== null) {
    sortedPlayers.sort((a, b) => {
      if (a[sortedColumn] < b[sortedColumn]) {
        return -1;
      }
      if (a[sortedColumn] > b[sortedColumn]) {
        return 1;
      }
      return 0;
    });
  }

  return (
    <table>
      <caption>Baseball players</caption>
      <thead>
        <tr>
          <th>
            <button type="button" onClick={() => setSortedColumn('name')}>
              Name
            </button>
          </th>
          <th>
            <button type="button" onClick={() => setSortedColumn('position')}>
              Position
            </button>
          </th>
          <th>
            <button type="button" onClick={() => setSortedColumn('number')}>
              Number
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedPlayers.map(player => (
          <tr key={player.id}>
            <td>{player.name}</td>
            <td>{player.position}</td>
            <td>{player.number}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlayerTable;
