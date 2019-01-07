import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import SearchIcon from './SearchIcon';
import Value from './Value';

export const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${rem('-6px')};
  flex: 1;
`;

const SearchableValueContainer = props => {
  const { children, getStyles, innerProps } = props;

  return (
    <div style={getStyles('valueContainer', props)} {...innerProps}>
      <SearchIcon />
      <ValueContainer>
        <Value>{children}</Value>
      </ValueContainer>
    </div>
  );
};

export default SearchableValueContainer;
