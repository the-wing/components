import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledLabel } from './Label';

export const StyledErrorMessage = styled(StyledLabel)`
  color: ${props => props.theme.colors.red.main};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
`;

const ErrorMessage = ({ marginBottom, marginTop, text }) => (
  <StyledErrorMessage marginBottom={marginBottom} marginTop={marginTop}>
    {text}
  </StyledErrorMessage>
);

ErrorMessage.propTypes = {
  marginBottom: PropTypes.string,
  marginTop: PropTypes.string,
  text: PropTypes.string.isRequired,
};

ErrorMessage.defaultProps = {
  marginBottom: '7px',
  marginTop: '7px',
};

export default ErrorMessage;
