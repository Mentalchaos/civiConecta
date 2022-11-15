import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import arrow from 'src/assets/Icons/arrow.svg';

const Table = ({
  type,
  data,
  dataHeader,
  handleCheckboxSelected,
  ...props
}) => {
  const [checked, setChecked] = useState({});
  const checkedCount = Object.keys(checked).filter(key => checked[key]).length;
  const disabled = checkedCount > 0;

  const onSelectedChange = index => {
    setChecked({
      ...checked,
      [index]: !checked[index],
    });
  };

  return (
    <>
      {data.length ? (
        <table className="table" {...props}>
          <thead
            style={{
              backgroundColor:
                type === 0 ? 'var(--color-primary)' : 'var(--color-secondary)',
            }}
          >
            <tr>
              {dataHeader.map(headerName => (
                <th>{headerName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.values(data).map((obj, index) => {
              return (
                <tr key={index}>
                  <td
                    key={index}
                    style={{ position: 'absolute', border: 'none' }}
                  >
                    <input
                      onChange={e => {
                        onSelectedChange(index);
                        e.target.checked
                          ? handleCheckboxSelected(obj)
                          : handleCheckboxSelected(null);
                      }}
                      disabled={!checked[index] && disabled}
                      id={index}
                      type="checkbox"
                    />
                    <label htmlFor={index}></label>
                  </td>
                  {Object.values(obj).map((value, dataIndex) => (
                    <td key={dataIndex}>{value}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h1>Aún no se registran instituciones</h1>
      )}
    </>
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
