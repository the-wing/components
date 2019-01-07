import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Loader from 'react-loader-spinner';

const Container = styled.div`
  margin-right: ${rem('16px')};
`;

const LoadingIndicator = () => {
  return (
    <Container>
      <Loader type="TailSpin" color="#00BFFF" height="13" width="13" />
    </Container>
  );
};

export default LoadingIndicator;
