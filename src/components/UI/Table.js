import React, { useMemo, useState } from 'react';
import { useRowSelect, useSortBy, useTable } from 'react-table';
import PropTypes from 'prop-types';
import arrow from 'src/assets/Icons/arrow.svg';

const Table = ({ data, dataHeader }) => {
  const [showCheckbox, setShowCheckbox] = useState(false);
  const columns = useMemo(() => [...dataHeader], []);
  const sortBy = [{ id: 'name' }];

  const tableInstance = useTable(
    { columns, data, initialState: { sortBy } },
    useSortBy,
    useRowSelect,
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setSortBy,
    toggleRowSelected,
  } = tableInstance;

  const handleRowSelected = dataRow => {
    // Data table de fila seleccionada para vista de asignacion
    console.log(dataRow);
    return dataRow;
  };

  return (
    <table className="table" {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => {
          const { key } = headerGroup.getHeaderGroupProps();
          return (
            <tr {...headerGroup.getHeaderGroupProps()} key={key}>
              {headerGroup.headers.map(column => {
                const { key } = column.getHeaderProps();

                return (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={key}
                    onClick={() => {
                      const desc = column.isSortedDesc
                        ? undefined
                        : column.isSortedDesc
                        ? false
                        : true;
                      setSortBy([{ id: column.id, desc }]);
                    }}
                  >
                    <div style={{ position: 'relative' }}>
                      {column.render('Header')}
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <img
                            style={{
                              position: 'absolute',
                              bottom: '20%',
                              right: '33%',
                              transition: 'all 0.3s ease-in-out',
                              rotate: '180deg',
                            }}
                            src={arrow}
                            alt="arrow"
                          />
                        ) : (
                          <img
                            style={{
                              position: 'absolute',
                              bottom: '20%',
                              right: '33%',
                              transition: 'all 0.3s ease-in-out',
                            }}
                            src={arrow}
                            alt="arrow"
                          />
                        )
                      ) : (
                        ''
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          );
        })}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          const { key } = row.getRowProps();
          return (
            <tr
              key={key}
              onClick={() => handleRowSelected(row)}
              {...row.getRowProps()}
            >
              {row.cells.map(cell => {
                const { key } = cell.getCellProps();
                return (
                  <td key={key} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  dataHeader: PropTypes.array.isRequired,
};

Table.defaultProps = {
  data: [],
  dataHeader: [],
};

export default Table;
