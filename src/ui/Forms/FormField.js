import React from 'react';
import styled from 'styled-components';

const StyledFormField = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 20px;
  position: relative;
`;

const FormField = ({ children }) => <StyledFormField>{children}</StyledFormField>;

export default FormField;
