import React from 'react';
// https://github.com/fmoo/react-typeahead
import { Typeahead as ReactTypeAhead } from 'react-typeahead';
import styled from 'styled-components';

import TypeAheadMenu from './TypeAheadMenu';

const StyledReactTypeAhead = styled(ReactTypeAhead)`
  display: flex;
  flex-flow: column;

  input {
    background-color: transparent;
    color: ${props => props.theme.colors.solitude.main};
    border: none;
    flex: 1;
    font-family: ${props => props.theme.text.primary};
    font-size: calc((14 / 16) * 1rem);
    letter-spacing: 0.2px;
    outline: none;
    padding-bottom: 8px;
    padding-top: 8px;
    resize: none;
    border-bottom: 0.5px solid ${props =>
      props.theme.colors[props.error ? 'red' : 'grayChateau'].main}

    ::placeholder {
      color: ${props => props.theme.colors.grayChateau.main};
    }
  }
`;

const TypeAhead = ({ options, placeholder, ...inputProps }) => (
  <StyledReactTypeAhead
    initialValue={inputProps.value}
    onChange={inputProps.onChange}
    onOptionSelected={inputProps.onChange}
    options={options}
    placeholder={placeholder}
    customListComponent={TypeAheadMenu}
    allowCustomValues={1}
  />
);

export default TypeAhead;
