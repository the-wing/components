import React from 'react';
import styled, { keyframes } from 'styled-components';

export const shimmerAnimation = keyframes`
  0% {
    background-position: -241px 0;
  }
  100% {
    background-position: 241px 0;
  }
`;
