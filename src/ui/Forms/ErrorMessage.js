import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledLabel } from './Label';

export const StyledErrorMessage = styled(StyledLabel)`
  color: ${props => props.theme.colors.red.main};
  margin-top: ${props => props.marginTop};
`;

const ErrorMessage = ({ marginTop, text }) => (
  <StyledErrorMessage marginTop={marginTop}>{text}</StyledErrorMessage>
);

ErrorMessage.propTypes = {
  marginTop: PropTypes.string,
  text: PropTypes.string.isRequired,
};

ErrorMessage.defaultProps = {
  marginTop: '7px',
};

export default ErrorMessage;
