import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from 'ui/Box/Box';
import Counter from 'ui/Counter/Counter';
import ErrorMessage from './ErrorMessage';
import { StyledInput } from './Input';

const StyledTextArea = StyledInput.withComponent('textarea');

const TextArea = ({ currentLength, error, maxLength, ...textAreaProps }) => (
  <Fragment>
    <StyledTextArea
      maxLength={maxLength}
      rows="5"
      error={error && error.length > 0}
      {...textAreaProps}
    />
    {!maxLength && error && <ErrorMessage text={error} />}
    {maxLength && (
      <Box margin={{ vertical: 6.5 / 16 }}>
        {error && <ErrorMessage marginTop="0px" text={error} />}
        <Counter
          currentLength={currentLength}
          error={error && error.length > 0}
          maxLength={maxLength}
        />
      </Box>
    )}
  </Fragment>
);

TextArea.propTypes = {
  currentLength: PropTypes.number,
  error: PropTypes.string,
  maxLength: PropTypes.number,
};

TextArea.defaultProps = {
  currentLength: null,
  error: '',
  maxLength: null,
};

export default TextArea;
