import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { default as ReactSelect, components } from 'react-select';
import Async from 'react-select/lib/Async';
import AsyncCreatableSelect from 'react-select/lib/AsyncCreatable';
import styled from 'styled-components';
import { rem } from 'polished';
import Loader from 'react-loader-spinner';
import theme from 'theme';

import Box from 'ui/Box/Box';
import Chip from 'ui/Chip/Chip';
import Counter from 'ui/Counter/Counter';
import ErrorMessage from 'ui/Forms/ErrorMessage';
import Icon from 'ui/Icon/Icon';
import Text from 'ui/Text/Text';
import searchIcon from 'assets/img/search.svg';

const ClearIndicator = props => {
  return <div>hi</div>;
};

const StyledAddLabel = styled(Box)`
  justify-content: space-between;
  opacity: ${props => (props.disabled ? '0.5' : '1')};
`;

const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${rem('-6px')};
`;

const StyledMultiValueContainer = styled.div`
  margin-top: ${rem('6px')};
`;

const StyledValue = styled.div`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  padding: ${rem('8px')} 0;
  flex: 1;
`;

// prettier-ignore
const SearchIcon = styled.div`
  display: inline-block;
  content: "";
  width: ${rem('14px')};
  height: ${rem('14px')};
  background: url(${searchIcon}) no-repeat;
  margin-right: ${rem('16px')};
  margin-left: ${rem('16px')};
`;

const StyledCreatableChild = styled.div`
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
  if (props.selectProps.hiddenIndicator) {
    return null;
  }

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
        <SearchIcon />
        <ValueContainer>
          <StyledValue>{children}</StyledValue>
        </ValueContainer>
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
        <StyledCreatableChild>{children}</StyledCreatableChild>
      </components.SingleValue>
    )
  );
};

const SearchableMenu = ({ children, ...props }) => {
  if (props.selectProps.hiddenMenu) {
    return null;
  }

  return components.Menu && <components.Menu {...props}>{children}</components.Menu>;
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

const MultiValue = ({ children, removeProps, ...props }) => {
  return (
    components.MultiValueContainer && (
      <StyledMultiValueContainer>
        <components.MultiValueContainer {...props}>
          <Chip
            color="terracota"
            text={children}
            onRemove={removeProps.onClick}
            noMarginBottom
            dark
            small
          />
        </components.MultiValueContainer>
      </StyledMultiValueContainer>
    )
  );
};

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

const Select = ({
  canCreateOptions,
  error,
  hiddenIndicator,
  hiddenMenu,
  isMulti,
  isClearable,
  isSearchable,
  loadOptions,
  maxLength,
  options,
  placeholder,
  withoutBorder,
  ...inputProps
}) => {
  let searchableComponents = (isSearchable || canCreateOptions || loadOptions) && {
    Placeholder: SearchablePlaceholder,
    ValueContainer: SearchableValueContainer,
    SingleValue: SearchableSingleValue,
    Menu: SearchableMenu,
  };

  if (canCreateOptions || loadOptions) {
    const AsyncSelect = canCreateOptions ? AsyncCreatableSelect : Async;

    return (
      <Fragment>
        <AsyncSelect
          components={{
            ClearIndicator,
            DropdownIndicator,
            LoadingIndicator,
            MultiValue,
            ValueContainer,
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
          hiddenMenu={hiddenMenu}
          isClearable={isClearable}
          isMulti={isMulti}
          options={options}
          placeholder={placeholder}
          // isSearchable = true
          styles={customStyles(true, error && error.length > 0, withoutBorder)}
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
          ClearIndicator,
          DropdownIndicator,
          MultiValue,
          ValueContainer,
          ...searchableComponents,
        }}
        hiddenMenu={hiddenMenu}
        isClearable={isClearable}
        isMulti={isMulti}
        isSearchable={isSearchable}
        options={options}
        maxLength={maxLength}
        placeholder={placeholder}
        styles={customStyles(isSearchable, error && error.length > 0, withoutBorder)}
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
  hiddenMenu: PropTypes.bool,
  isClearable: PropTypes.bool,
  isMulti: PropTypes.bool,
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
  withoutBorder: PropTypes.bool,
};

Select.defaultProps = {
  canCreateOptions: false,
  error: null,
  hiddenMenu: false,
  hiddenIndicator: false,
  isClearable: false,
  isMulti: false,
  loadOptions: null,
  maxLength: null,
  placeholder: '',
  withoutBorder: false,
};

export default Select;
