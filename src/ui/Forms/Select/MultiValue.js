import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import Chip from 'ui/Chip/Chip';

const Container = styled.div`
  margin-top: ${rem('6px')};
`;

const MultiValue = ({ children, removeProps, ...props }) => {
  return (
    <Container {...props}>
      <Chip
        color="terracota"
        text={children}
        onRemove={removeProps.onClick}
        noMarginBottom
        dark
        small
      />
    </Container>
  );
};

export default MultiValue;
