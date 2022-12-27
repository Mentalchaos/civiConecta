const styles = {
  spinnerWrapper: { marginTop: 30 },
  noGradeSelected: {
    fontSize: '26px',
    textAlign: 'center'
  },
  coursesWrapper: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  studentsAdded: { fontSize: 14 },
  button: {
    background: 'var(--color-secondary)',
    color: '#fff',
    padding: '5px 40px',
    borderRadius: '20px',
  },
  fieldsWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 5,
    paddingTop: 10,
  },
  errorMessage: {
    color: 'red',
    fontSize: '13px'
  },
  buttonWrapper: {
    marginTop: 20,
    display: 'flex',
    gap: 10,
    justifyContent: 'right',
    paddingBottom: 40,
  },
  dropdownWrapper: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    gap: '20px'
  },
  dropdownContainer: {
    width: '50%',
    marginRight: 50
  },
  centerContent: { textAlign: 'center' }
};

export default styles;
