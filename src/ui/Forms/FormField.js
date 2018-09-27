import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledFormField = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: ${props => (props.noMargin ? '0px' : '20px')};
  position: relative;
  flex: ${props => (props.fullWidth ? '1' : '0')};
`;

const FormField = ({ children, fullWidth, noMargin }) => (
  <StyledFormField fullWidth={fullWidth} noMargin={noMargin}>
    {children}
  </StyledFormField>
);

FormField.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
  noMargin: PropTypes.bool,
};

FormField.defaultProps = {
  fullWidth: false,
  noMargin: false,
};

export default FormField;
