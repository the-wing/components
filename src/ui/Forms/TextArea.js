import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from 'ui/Box/Box';
import Counter from 'ui/Counter/Counter';
import ErrorMessage from './ErrorMessage';

const StyledTextArea = styled.textarea`
  display: flex;
  background-color: transparent;
  color: ${props => props.theme.colors.solitude.main};
  flex: 1;
  font-family: ${props => props.theme.text.primary};
  font-size: calc((14 / 16) * 1rem);
  letter-spacing: 0.2px;
  border: 0;
  border-bottom: ${props =>
    props.noBorder
      ? '0px solid transparent'
      : `1px solid ${props.theme.colors[props.error ? 'red' : 'grayChateau'].main}`};
  outline: none;
  padding-bottom: 8px;
  padding-top: 8px;
  resize: none;

  ::placeholder {
    color: ${props => props.theme.colors.grayChateau.main};
  }
`;

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
  error: null,
  maxLength: null,
};

export default TextArea;
