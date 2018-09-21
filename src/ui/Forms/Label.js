import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from 'ui/Text/Text';

export const StyledLabel = styled.label`
  flex: 1;
  font-size: 0.625rem;
  color: ${props => props.theme.colors[props.error ? 'red' : 'solitude'].main};
`;

const Label = ({ error, htmlFor, text }) => (
  <StyledLabel error={error && error.length > 0} htmlFor={htmlFor}>
    {text}
  </StyledLabel>
);

Label.propTypes = {
  error: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

Label.defaultProps = {
  error: '',
};

export default Label;
