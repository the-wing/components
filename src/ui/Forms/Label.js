import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledLabel = styled.label`
  flex: 1;
  font-size: 0.625rem;
  color: ${props => props.theme.colors[props.error ? 'red' : 'solitude'].main};
`;

const Label = ({ error, htmlFor, text }) => (
  <StyledLabel error={error} htmlFor={htmlFor}>
    {text}
  </StyledLabel>
);

Label.propTypes = {
  error: PropTypes.bool,
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

Label.defaultProps = {
  error: false,
};

export default Label;
