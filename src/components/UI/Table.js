import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRowSelect, useSortBy, useTable } from 'react-table';
import arrow from 'src/assets/Icons/arrow.svg';

const Table = ({ type, data, dataHeader, ...props }) => {
  const [showCheckbox, setShowCheckbox] = useState(false);
  const columns = useMemo(() => [...dataHeader], []);
  const sortBy = [{ id: 'name' }];

  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef();
      const resolvedRef = ref || defaultRef;

      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate]);

      return (
        <>
          <input type="checkbox" ref={resolvedRef} {...rest} />
        </>
      );
    },
  );

  const tableInstance = useTable(
    { columns, data, initialState: { sortBy } },
    useSortBy,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        {
          id: 'selection',
          Cell: ({ row }) => {
            return (
              <div>
                <IndeterminateCheckbox
                  id={row.original.name}
                  {...row.getToggleRowSelectedProps()}
                />
                <label htmlFor={row.original.name}></label>
              </div>
            );
          },
        },
        ...columns,
      ]);
    },
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setSortBy,
    selectedFlatRows,
  } = tableInstance;
  // Checkbox seleccionado

  const rowCheckboxSelected = selectedFlatRows.map(item => item.original);
  console.log(rowCheckboxSelected);

  const handleRowSelected = dataRow => {
    // Data table de fila seleccionada para vista de asignacion
    console.log(dataRow);
    return dataRow;
  };

  return (
    <table className="table" {...getTableProps()} {...props}>
      <thead
        style={{
          backgroundColor:
            type === 0 ? 'var(--color-primary)' : 'var(--color-secondary)',
        }}
      >
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
                    <div className="header-table__arrow">
                      <span>{column.render('Header')}</span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <img
                            style={{
                              transition: 'all 0.3s ease-in-out',
                              marginLeft: '15px',
                              rotate: '180deg',
                            }}
                            src={arrow}
                            alt="arrow"
                          />
                        ) : (
                          <img
                            style={{
                              marginLeft: '15px',
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
