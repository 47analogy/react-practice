import { useState, useMemo } from 'react';

const useSortTable = items => {
  const [sortedColumn, setsortedColumn] = useState({});

  let sortableItems = [...items];

  useMemo(() => {
    sortableItems = [...items];
    if (sortedColumn !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortedColumn.key] < b[sortedColumn.key]) {
          return sortedColumn.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortedColumn.key] > b[sortedColumn.key]) {
          return sortedColumn.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortedColumn]);

  const getSortDirection = key => {
    let direction = 'ascending';
    if (
      sortedColumn &&
      sortedColumn.key === key &&
      sortedColumn.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setsortedColumn({ key, direction });
  };
  return { sortableItems, getSortDirection };
};

export default useSortTable;
