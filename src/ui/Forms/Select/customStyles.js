import theme from 'theme';

const customStyles = (isSearchable = false, error = false, withoutBorder = false) => ({
  control: (base, state) => ({
    ...base,
    fontSize: 'calc((14 / 16) * 1rem)',
    borderWidth: 0,
    borderRadius: 0,
    borderColor: 'transparent',
    borderBottom:
      (isSearchable && state.isFocused) || withoutBorder
        ? 'none'
        : `0.5px solid ${theme.colors[error ? 'red' : 'grayChateau'].main}`,
    backgroundColor: 'white',
    boxShadow: isSearchable && state.isFocused ? '0 0 20px -1px rgba(164, 166, 168, 0.3)' : 'none',
    minHeight: '48px',
    color: theme.colors.solitude.main,
    '&:hover': {
      borderColor: 'transparent',
      borderBottom:
        (isSearchable && state.isFocused) || withoutBorder
          ? 'none'
          : `0.5px solid ${theme.colors[error ? 'red' : 'grayChateau'].main}`,
      cursor: 'pointer',
    },
  }),
  indicatorSeparator: (base, state) => ({
    ...base,
    width: 0,
    backgroundColor: 'transparent',
  }),
  input: (base, state) => ({
    margin: 0,
    marginTop: 6,
    paddingTop: 0,
    paddingBottom: 0,
    display: 'flex',
    alignItems: 'center',
  }),
  menu: (base, state) => ({
    ...base,
    borderRadius: 0,
    boxShadow: `${isSearchable ? '0 15px 20px -15px' : '0 0 20px -1px'} rgba(164, 166, 168, 0.3)`,
    cursor: 'pointer',
    top: isSearchable ? '85%' : '0',
    marginTop: 0,
    marginBottom: 0,
  }),
  menuList: (base, state) => ({
    ...base,
    maxHeight: 259,
    paddingTop: isSearchable ? 8 : 0,
    paddingBottom: 0,
  }),
  option: (base, state) => ({
    ...base,
    fontSize: 'calc((14 / 16) * 1rem)',
    padding: '15px 16px',
    color: theme.colors.solitude.main,
    backgroundColor: state.isFocused ? '#faf3f1' : null,
    '&:active': {
      backgroundColor: state.isDisabled ? 'white' : '#eef7f1',
    },
    '&:hover': {
      cursor: state.isDisabled ? 'not-allowed' : 'pointer',
    },
  }),
  placeholder: (base, state) => ({
    ...base,
    color: theme.colors.grayChateau.main,
  }),
  singleValue: (base, state) => ({
    ...base,
    display: 'flex',
    alignItems: 'center',
    color: theme.colors.solitude.main,
  }),
  valueContainer: (base, state) => ({
    ...base,
    padding: 0,
    color: theme.colors.solitude.main,
  }),
});

export default customStyles;
