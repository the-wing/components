import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledFormField } from './FormField';

const StyledInputGroup = styled.div`
  display: flex;
  justify-content: space-between;

  > ${StyledFormField}:not(:last-of-type) {
    margin-right: ${props => props.gutter};
  }
`;

const InputGroup = ({ children, gutter }) => (
  <StyledInputGroup gutter={gutter}>{children}</StyledInputGroup>
);

InputGroup.propTypes = {
  children: PropTypes.node.isRequired,
  gutter: PropTypes.string,
};

InputGroup.defaultProps = {
  gutter: '20px',
};

export default InputGroup;
