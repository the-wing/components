import React from 'react';
import styled from 'styled-components';
import { StyledLabel } from './Label';

export const StyledErrorMessage = styled(StyledLabel)`
  color: ${props => props.theme.colors.red.main};
  margin-top: 7px;
`;

const ErrorMessage = ({ text }) => <StyledErrorMessage>{text}</StyledErrorMessage>;

export default ErrorMessage;
