import React, { Fragment } from 'react';
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
import ErrorMessage from './ErrorMessage';

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

const StyledCreatableChild = styled.div`
  margin-left: ${props => (props.menuIsOpen ? '46px' : 'inherit')};
  color: ${props => theme.colors.solitude.main};
`;

const StyledCreatablePlaceholder = styled(StyledCreatableChild)`
  color: ${props => theme.colors.grayChateau.main};
`;

const DropdownIndicator = props => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <Box padding={0} margin={0}>
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
        {props.selectProps.menuIsOpen && <SearchIcon />}
        {children}
      </components.ValueContainer>
    )
  );
};

const CreatablePlaceholder = ({ children, ...props }) => {
  return (
    components.Placeholder && (
      <components.Placeholder {...props}>
        <StyledCreatablePlaceholder menuIsOpen={props.selectProps.menuIsOpen}>
          {children}
        </StyledCreatablePlaceholder>
      </components.Placeholder>
    )
  );
};

const CreatableSingleValue = ({ children, ...props }) => {
  return (
    components.SingleValue && (
      <components.SingleValue {...props}>
        <StyledCreatableChild menuIsOpen={props.selectProps.menuIsOpen}>
          {children}
        </StyledCreatableChild>
      </components.SingleValue>
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
    <Box>{maxLength && <Counter currentLength={currentLength} maxLength={maxLength} />}</Box>
  </StyledAddLabel>
);

const customStyles = (isSearchable = false, isCreatable = false, error = false) => ({
  control: (base, state) => ({
    ...base,
    fontSize: 'calc((14 / 16) * 1rem)',
    borderWidth: 0,
    borderRadius: 0,
    borderColor: 'transparent',
    borderBottom:
      isCreatable && state.isFocused
        ? 'none'
        : `0.5px solid ${theme.colors[error ? 'red' : 'grayChateau'].main}`,
    borderColor: 'transparent',
    backgroundColor: 'white',
    boxShadow: isCreatable && state.isFocused ? '0 0 20px -1px rgba(164, 166, 168, 0.3)' : 'none',
    minHeight: '34px',
    maxHeight: '34px',
    color: theme.colors.solitude.main,
    '&:hover': {
      borderColor: 'transparent',
      borderBottom:
        isCreatable && state.isFocused
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
    paddingTop: isCreatable ? 8 : 0,
    paddingBottom: 0,
  }),
  option: (base, state) => ({
    ...base,
    fontSize: 'calc((14 / 16) * 1rem)',
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
  placeholder: (base, state) => ({
    ...base,
    color: theme.colors.grayChateau.main,
  }),
  singleValue: (base, state) => ({
    ...base,
    color: theme.colors.solitude.main,
  }),
  valueContainer: (base, state) => ({
    ...base,
    padding: 0,
    color: theme.colors.solitude.main,
  }),
});

const Select = ({
  canCreateOptions,
  error,
  hiddenIndicator,
  isSearchable,
  maxLength,
  options,
  placeholder,
  ...inputProps
}) => {
  if (canCreateOptions) {
    return (
      <Fragment>
        <CreatableSelect
          components={{
            DropdownIndicator,
            Placeholder: CreatablePlaceholder,
            ValueContainer: CreatableValueContainer,
            SingleValue: CreatableSingleValue,
          }}
          formatCreateLabel={inputValue => (
            <AddLabel
              inputValue={inputValue}
              currentLength={inputValue.length || 0}
              maxLength={maxLength}
            />
          )}
          value={inputProps.value}
          options={options}
          placeholder={placeholder}
          // isSearchable = true, isCreatable = true
          styles={customStyles(true, true, error && error.length > 0)}
          onChange={inputProps.onChange}
          options={options}
          maxLength={maxLength}
          error={error && error.length > 0}
          hiddenIndicator
          blurInputOnSelect
          {...inputProps}
        />
        {error && error.length > 0 && <ErrorMessage text={error} />}
      </Fragment>
    );
  }

  return (
    <Fragment>
      <ReactSelect
        components={{
          DropdownIndicator,
        }}
        isSearchable={isSearchable}
        value={inputProps.value}
        onChange={inputProps.onChange}
        options={options}
        maxLength={maxLength}
        placeholder={placeholder}
        styles={customStyles(isSearchable, false, error && error.length > 0)}
        hiddenIndicator={hiddenIndicator}
        error={error && error.length > 0}
        blurInputOnSelect
        {...inputProps}
      />
      {error && error.length > 0 && <ErrorMessage text={error} />}
    </Fragment>
  );
};

Select.propTypes = {
  canCreateOptions: PropTypes.bool,
  error: PropTypes.string,
  isSearchable: PropTypes.bool,
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
  canCreateOptions: false,
  error: null,
  hiddenIndicator: false,
  maxLength: null,
  placeholder: '',
};

export default Select;
