import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { default as ReactSelect, components } from 'react-select';
import Async from 'react-select/lib/Async';
import AsyncCreatableSelect from 'react-select/lib/AsyncCreatable';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import theme from 'theme';

import Box from 'ui/Box/Box';
import Counter from 'ui/Counter/Counter';
import Icon from 'ui/Icon/Icon';
import Text from 'ui/Text/Text';
import searchIcon from 'assets/img/search.svg';
import ErrorMessage from './ErrorMessage';

const StyledAddLabel = styled(Box)`
  justify-content: space-between;
  opacity: ${props => (props.disabled ? '0.5' : '1')};
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

const StyledSearchablePlaceholder = styled(StyledCreatableChild)`
  color: ${props => theme.colors.grayChateau.main};
`;

const LoadingIndicator = () => {
  return (
    components.LoadingIndicator && <Loader type="TailSpin" color="#00BFFF" height="13" width="13" />
  );
};

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

const SearchableValueContainer = ({ children, ...props }) => {
  return (
    components.ValueContainer && (
      <components.ValueContainer {...props}>
        {props.selectProps.menuIsOpen && <SearchIcon />}
        {children}
      </components.ValueContainer>
    )
  );
};

const SearchablePlaceholder = ({ children, ...props }) => {
  return (
    components.Placeholder && (
      <components.Placeholder {...props}>
        <StyledSearchablePlaceholder menuIsOpen={props.selectProps.menuIsOpen}>
          {children}
        </StyledSearchablePlaceholder>
      </components.Placeholder>
    )
  );
};

const SearchableSingleValue = ({ children, ...props }) => {
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

const AddLabel = ({ currentLength, error, inputValue, maxLength }) => {
  const disabled = currentLength > maxLength || error;

  return (
    <StyledAddLabel display="flex" disabled={disabled}>
      <Box>
        <Icon name="add" size={10} color="terracota" />
        <Text color="terracota" size={13 / 16} style={{ marginLeft: '0.625rem' }}>
          Add {inputValue}
        </Text>
      </Box>
      <Box>
        {maxLength && <Counter currentLength={currentLength} error={error} maxLength={maxLength} />}
      </Box>
    </StyledAddLabel>
  );
};

const customStyles = (isSearchable = false, error = false) => ({
  control: (base, state) => ({
    ...base,
    fontSize: 'calc((14 / 16) * 1rem)',
    borderWidth: 0,
    borderRadius: 0,
    borderColor: 'transparent',
    borderBottom:
      isSearchable && state.isFocused
        ? 'none'
        : `0.5px solid ${theme.colors[error ? 'red' : 'grayChateau'].main}`,
    backgroundColor: 'white',
    boxShadow: isSearchable && state.isFocused ? '0 0 20px -1px rgba(164, 166, 168, 0.3)' : 'none',
    minHeight: '34px',
    maxHeight: '34px',
    color: theme.colors.solitude.main,
    '&:hover': {
      borderColor: 'transparent',
      borderBottom:
        isSearchable && state.isFocused
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
    padding: '10px 16px',
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
  loadOptions,
  maxLength,
  options,
  placeholder,
  ...inputProps
}) => {
  const searchableComponents = (isSearchable || canCreateOptions || loadOptions) && {
    Placeholder: SearchablePlaceholder,
    ValueContainer: SearchableValueContainer,
    SingleValue: SearchableSingleValue,
  };

  if (canCreateOptions || loadOptions) {
    const AsyncSelect = canCreateOptions ? AsyncCreatableSelect : Async;

    return (
      <Fragment>
        <AsyncSelect
          components={{
            DropdownIndicator,
            LoadingIndicator,
            ...searchableComponents,
          }}
          formatCreateLabel={inputValue => (
            <AddLabel
              error={error && error.length > 0}
              inputValue={inputValue}
              currentLength={inputValue.length || 0}
              maxLength={maxLength}
            />
          )}
          isOptionDisabled={option => {
            if (option.__isNew__ && maxLength && option.value.length > maxLength) {
              return true;
            }

            return false;
          }}
          options={options}
          placeholder={placeholder}
          // isSearchable = true
          styles={customStyles(true, error && error.length > 0)}
          defaultOptions={options}
          loadOptions={loadOptions}
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
          ...searchableComponents,
        }}
        isSearchable={isSearchable}
        options={options}
        maxLength={maxLength}
        placeholder={placeholder}
        styles={customStyles(isSearchable, error && error.length > 0)}
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
  loadOptions: PropTypes.func,
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
  loadOptions: null,
  maxLength: null,
  placeholder: '',
};

export default Select;
