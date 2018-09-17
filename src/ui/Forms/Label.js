import React from 'react';
import styled from 'styled-components';

import Text from 'ui/Text/Text';

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

export default Label;
