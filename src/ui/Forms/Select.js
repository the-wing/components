import React from 'react';
import PropTypes from 'prop-types';
import { default as ReactSelect, components } from 'react-select';
import theme from 'theme';

import Box from 'ui/Box/Box';
import Text from 'ui/Text/Text';

const DropdownIndicator = props => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <Box>
          <Text color="terracota" size="1.5">
            &#9662;
          </Text>
        </Box>
      </components.DropdownIndicator>
    )
  );
};

const customStyles = {
  control: (base, state) => ({
    ...base,
    fontSize: 'calc((14 / 16) * 1rem)',
    borderWidth: 0,
    borderRadius: 0,
    borderColor: 'transparent',
    borderBottom: `0.5px solid ${theme.colors.grayChateau.main}`,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    '&:hover': {
      borderColor: 'transparent',
      borderBottom: `0.5px solid ${theme.colors.grayChateau.main}`,
    },
  }),
  indicatorSeparator: (base, state) => ({
    ...base,
    width: 0,
    backgroundColor: 'transparent',
  }),
  menu: (base, state) => ({
    ...base,
    borderRadius: 0,
    boxShadow: '0 0 20px -1px rgba(164, 166, 168, 0.3)',
    cursor: 'pointer',
    top: '-5px',
  }),
  menuList: (base, state) => ({
    ...base,
    maxHeight: 259,
  }),
  option: (base, state) => ({
    ...base,
    color: theme.colors.solitude.main,
    backgroundColor: state.isFocused ? '#faf3f1' : null,
    '&:active': {
      backgroundColor: '#eef7f1',
    },
  }),
};

const Select = ({ defaultValue, options, placeholder, ...inputProps }) => (
  <ReactSelect
    components={{
      DropdownIndicator,
    }}
    isSearchable={false}
    value={inputProps.value}
    onChange={inputProps.onChange}
    options={options}
    placeholder={placeholder}
    styles={customStyles}
  />
);

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired
  ),
  placeholder: PropTypes.string,
};

Select.defaultProps = {
  placeholder: '',
};

export default Select;
