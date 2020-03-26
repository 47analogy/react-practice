import React from 'react';

const PlayerTable = props => {
  const { players } = props;

  const [sortedColumn, setsortedColumn] = React.useState({}); // sort by different columns

  let sortedPlayers = [...players]; // copy of props to display sorted players

  if (sortedColumn !== null) {
    sortedPlayers.sort((a, b) => {
      if (a[sortedColumn.key] < b[sortedColumn.key]) {
        return sortedColumn.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortedColumn.key] > b[sortedColumn.key]) {
        return sortedColumn.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }

  const getSortDirection = key => {
    let direction = 'ascending';
    if (sortedColumn.key === key && sortedColumn.direction === 'ascending') {
      direction = 'descending';
    }
    setsortedColumn({ key, direction });
  };

  return (
    <table>
      <caption>Baseball players</caption>
      <thead>
        <tr>
          <th>
            <button type="button" onClick={() => getSortDirection('name')}>
              Name
            </button>
          </th>
          <th>
            <button type="button" onClick={() => getSortDirection('position')}>
              Position
            </button>
          </th>
          <th>
            <button type="button" onClick={() => getSortDirection('number')}>
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
