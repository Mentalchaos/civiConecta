import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const styles = {
  primary: { backgroundColor: 'var(--color-primary)' },
  secondary: { backgroundColor: 'var(--color-secondary)' },
  td: { width: '20px' }
};

const Table = ({
  type,
  data,
  dataHeader,
  handleCheckboxSelected,
  dataDisplayed,
  displayCheckbox,
  customClass,
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

  const cls = ['table', customClass].join(' ');
  const headStyle = type === 0 ? styles.primary : styles.secondary;

  return (
    <Fragment>
      <table className={cls} {...props}>
        <thead style={headStyle}>
          <tr>
            {displayCheckbox && <th style={styles.td}></th>}
            {dataHeader.map(headerName => (
              <th key={headerName}>{headerName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataDisplayed.map((obj, index) => {
            return (
              <tr key={index}>
                {displayCheckbox && (
                  <td style={styles.td}>
                    <input
                      onChange={e => {
                        onSelectedChange(index);
                        e.target.checked
                          ? handleCheckboxSelected(data[index])
                          : handleCheckboxSelected(null);
                      }}
                      disabled={!checked[index] && disabled}
                      id={index}
                      type="checkbox"
                    />
                    <label htmlFor={index}></label>
                  </td>
                )}
                {Object.values(obj).map((value, dataIndex) => {
                  return <td key={dataIndex}>{value}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  dataHeader: PropTypes.array.isRequired,
  handleCheckboxSelected: PropTypes.func,
  customClass: PropTypes.string,
  displayCheckbox: PropTypes.bool
};

Table.defaultProps = {
  displayCheckbox: true,
  customClass: '',
  data: [],
  dataHeader: [],
  handleCheckboxSelected: () => { }
};

export default Table;
