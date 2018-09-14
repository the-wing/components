import React from 'react';
import PropTypes from 'prop-types';
import { default as ReactSelect, components } from 'react-select';
import CreatableSelect from 'react-select/lib/Creatable';
import styled from 'styled-components';
import theme from 'theme';

import Box from 'ui/Box/Box';
import Counter from 'ui/Counter/Counter';
import Icon from 'ui/Icon/Icon';
import Text from 'ui/Text/Text';

const StyledAddLabel = styled(Box)`
  justify-content: space-between;
`;

const DropdownIndicator = props => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <Box padding={0}>
          <Text color={props.selectProps.hiddenIndicator ? 'white' : 'terracota'} size="1.5">
            &#9662;
          </Text>
        </Box>
      </components.DropdownIndicator>
    )
  );
};

const AddLabel = ({ currentLength, inputValue, maxLength }) => (
  <StyledAddLabel display="flex">
    <Box>
      <Icon name="add" size={10} color="terracota" />
      <Text color="terracota" size={13 / 16} style={{ marginLeft: '0.625rem' }}>
        Add {inputValue}
      </Text>
    </Box>
    <Box>
      <Counter currentLength={currentLength} maxLength={maxLength} />
    </Box>
  </StyledAddLabel>
);

const customStyles = isSearchable => ({
  control: (base, state) => ({
    ...base,
    fontSize: 'calc((14 / 16) * 1rem)',
    borderWidth: 0,
    borderRadius: 0,
    borderColor: 'transparent',
    borderBottom: `0.5px solid ${theme.colors.grayChateau.main}`,
    borderColor: 'transparent',
    backgroundColor: 'white',
    boxShadow: 'none',
    minHeight: '34px',
    color: theme.colors.solitude.main,
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
    top: isSearchable ? '85%' : '0',
  }),
  menuList: (base, state) => ({
    ...base,
    maxHeight: 259,
  }),
  option: (base, state) => ({
    ...base,
    padding: '10px 16px',
    color: theme.colors.solitude.main,
    backgroundColor: state.isFocused ? '#faf3f1' : null,
    '&:active': {
      backgroundColor: '#eef7f1',
    },
  }),
  valueContainer: (base, state) => ({
    ...base,
    padding: 0,
    color: theme.colors.solitude.main,
  }),
  singleValue: (base, state) => ({
    ...base,
    color: theme.colors.solitude.main,
  }),
});

const Select = ({
  canCreateOptions,
  defaultValue,
  hiddenIndicator,
  id,
  isSearchable,
  maxLength,
  options,
  placeholder,
  ...inputProps
}) => {
  if (canCreateOptions) {
    // implied that this is 'isSearchable' and has a 'hiddenIndicator'
    return (
      <CreatableSelect
        id={id}
        components={{
          DropdownIndicator,
        }}
        formatCreateLabel={inputValue => (
          <AddLabel
            inputValue={inputValue}
            currentLength={inputValue.length || 0}
            maxLength={maxLength}
          />
        )}
        value={inputProps.value}
        onChange={inputProps.onChange}
        options={options}
        placeholder={placeholder}
        styles={customStyles(true)}
        onChange={inputProps.onChange}
        options={options}
        maxLength={maxLength}
        hiddenIndicator
      />
    );
  }

  return (
    <ReactSelect
      id={id}
      components={{
        DropdownIndicator,
      }}
      isSearchable={isSearchable}
      value={inputProps.value}
      onChange={inputProps.onChange}
      options={options}
      placeholder={placeholder}
      styles={customStyles(isSearchable)}
      hiddenIndicator={hiddenIndicator}
    />
  );
};

Select.propTypes = {
  isSearchable: false,
  maxLength: PropTypes.number,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired
  ),
  placeholder: PropTypes.string,
};

Select.defaultProps = {
  hiddenIndicator: false,
  maxLength: null,
  placeholder: '',
};

export default Select;
