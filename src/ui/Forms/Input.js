import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledInput = styled.input`
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
`;

const Input = ({ error, placeholder, ...inputProps }) => (
  <StyledInput error={error} placeholder={placeholder} {...inputProps} />
);

Input.propTypes = {
  error: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default Input;
