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
import searchIcon from 'assets/img/search.svg';

const StyledAddLabel = styled(Box)`
  justify-content: space-between;
`;

// prettier-ignore
const SearchIcon = styled.div`
  display: inline-block;
  content: "";
  width: 14px;
  height: 14px;
  background: url(${searchIcon}) no-repeat;
  margin-right: 16px;
  margin-left: 16px;
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

const CreatableValueContainer = ({ children, ...props }) => {
  return (
    components.ValueContainer && (
      <components.ValueContainer {...props}>
        <SearchIcon />
        {children}
      </components.ValueContainer>
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

const customStyles = (isSearchable = true, isCreatable = false) => ({
  control: (base, state) => ({
    ...base,
    fontSize: 'calc((14 / 16) * 1rem)',
    borderWidth: 0,
    borderRadius: 0,
    borderColor: 'transparent',
    borderBottom:
      isCreatable && state.isFocused ? 'none' : `0.5px solid ${theme.colors.grayChateau.main}`,
    borderColor: 'transparent',
    backgroundColor: 'white',
    boxShadow: isCreatable && state.isFocused ? '0 0 20px -1px rgba(164, 166, 168, 0.3)' : 'none',
    minHeight: '34px',
    color: theme.colors.solitude.main,
    '&:hover': {
      borderColor: 'transparent',
      borderBottom:
        isCreatable && state.isFocused ? 'none' : `0.5px solid ${theme.colors.grayChateau.main}`,
      cursor: 'pointer',
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
    boxShadow: `${isCreatable ? '0 15px 20px -15px' : '0 0 20px -1px'} rgba(164, 166, 168, 0.3)`,
    cursor: 'pointer',
    top: isSearchable ? '85%' : '0',
    marginTop: 0,
    marginBottom: 0,
  }),
  menuList: (base, state) => ({
    ...base,
    maxHeight: 259,
    paddingTop: 8,
    paddingBottom: 0,
  }),
  option: (base, state) => ({
    ...base,
    padding: '10px 16px',
    color: theme.colors.solitude.main,
    backgroundColor: state.isFocused ? '#faf3f1' : null,
    '&:active': {
      backgroundColor: '#eef7f1',
    },
    '&:hover': {
      cursor: 'pointer',
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
    marginLeft: isCreatable ? 46 : 0,
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
          ValueContainer: CreatableValueContainer,
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
        styles={customStyles(true, true)}
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
