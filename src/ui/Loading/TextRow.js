import React from 'react';
import styled from 'styled-components';
import { TextRow as ReactPlaceholderTextRow } from 'react-placeholder/lib/placeholders';
import { rgba } from 'polished';
import { shimmerAnimation } from './animation';

const StyledTextRow = styled(ReactPlaceholderTextRow)`
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${shimmerAnimation};
  animation-timing-function: linear;
  background: linear-gradient(
    to right,
    ${props => props.theme.colors.solitude.main} 8%,
    ${props => rgba(props.theme.colors.solitude.main, 0.8)} 16%,
    ${props => props.theme.colors.solitude.main} 33%
  );
  background-size: 650px 104px;
  position: relative;
  opacity: 0.1;
`;

const TextRow = ({ ...props }) => <StyledTextRow {...props} />;

export default TextRow;
