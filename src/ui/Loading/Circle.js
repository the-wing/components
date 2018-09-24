import React from 'react';
import styled from 'styled-components';
import { RoundShape as ReactPlaceholderRoundShape } from 'react-placeholder/lib/placeholders';
import theme from 'theme';
import { shimmerAnimation } from './animation';

const StyledCircle = styled(ReactPlaceholderRoundShape)`
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${shimmerAnimation};
  animation-timing-function: linear;
  background: linear-gradient(to right, #eeeeee 8%, #e6e4e4 16%, #eeeeee 33%);
  background-size: 650px 104px;
  position: relative;
  opacity: 0.6;
`;

const Circle = ({ ...props }) => <StyledCircle color={theme.colors.iron.main} {...props} />;

export default Circle;
