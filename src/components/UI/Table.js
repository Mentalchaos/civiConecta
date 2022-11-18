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
      <table className="table" {...props}>
        <thead
          style={{
            backgroundColor:
              type === 0 ? 'var(--color-primary)' : 'var(--color-secondary)',
          }}
        >
          <tr>
            <th style={{ width: 20 }}></th>
            {dataHeader.map(headerName => (
              <th>{headerName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((obj, index) => {
            return (
              <tr key={index}>
                <td style={{ width: 20 }}>
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
