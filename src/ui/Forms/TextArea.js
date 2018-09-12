import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from 'ui/Box/Box';
import { StyledInput } from './Input';
import { StyledLabel } from './Label';

const StyledTextArea = StyledInput.withComponent('textarea');
const Counter = StyledLabel.withComponent('span');
const StyledCounter = styled(Counter)`
  text-align: right;
`;

const TextArea = ({ currentLength, maxLength, ...textAreaProps }) => (
  <Fragment>
    <StyledTextArea maxLength={maxLength} rows="5" {...textAreaProps} />
    {maxLength && (
      <Box margin={{ vertical: 6.5 / 16 }}>
        <StyledCounter>
          {currentLength || 0} / {maxLength}
        </StyledCounter>
      </Box>
    )}
  </Fragment>
);

TextArea.propTypes = {
  currentLength: PropTypes.number,
  maxLength: PropTypes.number,
};

TextArea.defaultProps = {
  currentLength: null,
  maxLength: null,
};

export default TextArea;
