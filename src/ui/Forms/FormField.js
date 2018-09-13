import React from 'react';
import styled from 'styled-components';

export const StyledFormField = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 20px;
  position: relative;
  flex: 1;
`;

const FormField = ({ children }) => <StyledFormField>{children}</StyledFormField>;

export default FormField;
