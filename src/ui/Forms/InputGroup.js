import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from 'ui/Box/Box';
import { StyledFormField, default as FormField } from './FormField';

const StyledInputGroup = styled.div`
  display: flex;
  justify-content: space-between;

  > ${StyledFormField}:not(:last-of-type) {
    margin-right: 20px;
  }
`;

const InputGroup = ({ children }) => <StyledInputGroup>{children}</StyledInputGroup>;

InputGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InputGroup;
