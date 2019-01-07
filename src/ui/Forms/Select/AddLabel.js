import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import Counter from 'ui/Counter/Counter';
import Icon from 'ui/Icon/Icon';

const StyledAddLabel = styled.div`
  display: flex;
  justify-content: space-between;
  opacity: ${props => (props.disabled ? '0.5' : '1')};
`;

const Div = styled.div`
  display: flex;
`;

const Text = styled.span`
  font-size: ${rem('13px')};
  color: ${props => props.theme.colors.terracota.main};
  margin-left: ${rem('10px')};
`;

const AddLabel = ({ currentLength, error, inputValue, maxLength }) => {
  const disabled = currentLength > maxLength || error;

  return (
    <StyledAddLabel display="flex" disabled={disabled}>
      <Div>
        <Icon name="add" size={10} color="terracota" />
        <Text>Add {inputValue}</Text>
      </Div>
      <Div>
        {maxLength && <Counter currentLength={currentLength} error={error} maxLength={maxLength} />}
      </Div>
    </StyledAddLabel>
  );
};

export default AddLabel;
