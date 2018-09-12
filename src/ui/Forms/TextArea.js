import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from 'ui/Box/Box';
import Counter from 'ui/Counter/Counter';
import { StyledInput } from './Input';

const StyledTextArea = StyledInput.withComponent('textarea');

const TextArea = ({ currentLength, error, maxLength, ...textAreaProps }) => (
  <Fragment>
    <StyledTextArea maxLength={maxLength} rows="5" {...textAreaProps} />
    {maxLength && (
      <Box margin={{ vertical: 6.5 / 16 }}>
        <Counter currentLength={currentLength} error={error} maxLength={maxLength} />
      </Box>
    )}
  </Fragment>
);

TextArea.propTypes = {
  currentLength: PropTypes.number,
  error: PropTypes.bool,
  maxLength: PropTypes.number,
};

TextArea.defaultProps = {
  currentLength: null,
  error: false,
  maxLength: null,
};

export default TextArea;
