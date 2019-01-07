import React from 'react';
import styled from 'styled-components';

const StyledCreatableChild = styled.div`
  color: ${props => props.theme.colors.solitude.main};
`;

const SearchableSingleValue = props => {
  const { children, getStyles, innerProps, selectProps } = props;

  return (
    <div style={getStyles('singleValue', props)} {...innerProps}>
      <StyledCreatableChild>{children}</StyledCreatableChild>
    </div>
  );
};

export default SearchableSingleValue;
