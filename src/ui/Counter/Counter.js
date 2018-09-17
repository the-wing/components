import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { StyledLabel } from 'ui/Forms/Label';

const LabelAsSpan = StyledLabel.withComponent('span');
const StyledCounter = styled(LabelAsSpan)`
  text-align: right;
  color: ${props => (props.error ? props.theme.colors.red.main : 'inherit')};
`;

const Counter = ({ currentLength, error, maxLength }) => (
  <StyledCounter error={error}>
    {currentLength || 0} / {maxLength}
  </StyledCounter>
);

Counter.propTypes = {
  currentLength: PropTypes.number,
  error: PropTypes.bool,
  maxLength: PropTypes.number,
};

Counter.defaultProps = {
  currentLength: null,
  error: false,
  maxLength: null,
};

export default Counter;
