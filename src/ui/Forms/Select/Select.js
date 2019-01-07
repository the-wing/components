import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { default as ReactSelect, components } from 'react-select';
import Async from 'react-select/lib/Async';
import AsyncCreatableSelect from 'react-select/lib/AsyncCreatable';
import styled from 'styled-components';
import { rem } from 'polished';

import ErrorMessage from 'ui/Forms/ErrorMessage';

// Customized Styles
import AddLabel from './AddLabel';
import ClearIndicator from './ClearIndicator';
import DropdownIndicator from './DropdownIndicator';
import LoadingIndicator from './LoadingIndicator';
import MultiValue from './MultiValue';
import SearchableValueContainer, { ValueContainer } from './SearchableValueContainer';
import SearchablePlaceholder from './SearchablePlaceholder';
import SearchableSingleValue from './SearchableSingleValue';
import customStyles from './customStyles';

const SearchableMenu = ({ children, ...props }) => {
  if (props.selectProps.hiddenMenu) {
    return null;
  }

  return components.Menu && <components.Menu {...props}>{children}</components.Menu>;
};

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
