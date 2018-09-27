import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ErrorMessage from './ErrorMessage';

export const StyledInput = styled.input`
  background-color: transparent;
  color: ${props => props.theme.colors.solitude.main};
  flex: 1;
  font-family: ${props => props.theme.text.primary};
  font-size: calc((14 / 16) * 1rem);
  letter-spacing: 0.2px;
  outline: none;
  padding-bottom: 8px;
  padding-top: 8px;
  resize: none;
  border: 0;
  border-bottom: ${props =>
    props.noBorder
      ? '0px solid transparent'
      : `1px solid ${props.theme.colors[props.error ? 'red' : 'grayChateau'].main}`};

  ::placeholder {
    color: ${props => props.theme.colors.grayChateau.main};
  }
`;

const Input = ({ error, placeholder, ...inputProps }) => (
  <Fragment>
    <StyledInput error={error} placeholder={placeholder} {...inputProps} />
  </Fragment>
);

Input.propTypes = {
  error: PropTypes.bool,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  error: false,
  placeholder: null,
};

export default Input;
