import React from 'react';
import styled from 'styled-components';

const StyledSearchablePlaceholder = styled.div`
  color: ${props => props.theme.colors.grayChateau.main};
`;

const SearchablePlaceholder = props => {
  const { children, getStyles, innerProps, selectProps } = props;

  return (
    <div style={getStyles('placeholder', props)} {...innerProps}>
      <StyledSearchablePlaceholder menuIsOpen={selectProps.menuIsOpen}>
        {children}
      </StyledSearchablePlaceholder>
    </div>
  );
};

export default SearchablePlaceholder;
