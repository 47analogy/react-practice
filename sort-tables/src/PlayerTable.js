import React from 'react';
import useSortTable from './useSortTable';

const PlayerTable = props => {
  const { players } = props;
  const { sortableItems, getSortDirection } = useSortTable(players);

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
        {sortableItems.map(player => (
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
