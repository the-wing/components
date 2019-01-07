import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const Container = styled.div`
  display: flex;
`;

const Text = styled.span`
  color: ${props =>
    props.hidden ? props.theme.colors.white.main : props.theme.colors.terracota.main};
  font-size: ${rem('24px')};
`;

const DropdownIndicator = props => {
  const { getStyles, innerProps, selectProps } = props;

  if (selectProps.hiddenIndicator) {
    return null;
  }

  return (
    <Container style={getStyles('clearIndicator', props)} {...innerProps}>
      <Text hidden={selectProps.hiddenIndicator}>&#9662;</Text>
    </Container>
  );
};

export default DropdownIndicator;
