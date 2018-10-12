import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import styled from 'styled-components';

import Counter from 'ui/Counter/Counter';
import Text from 'ui/Text/Text';

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: white;
  box-shadow: 0 0 20px -1px rgba(164, 166, 168, 0.3);
  max-height: 259px;
  outline: none;
  overflow-y: scroll;
  z-index: 2;
`;

const MenuItem = styled.li`
  background-color: ${props => (props.selected ? '#fAf3f1' : 'transparent')};
  padding: 10px 16px;

  :hover {
    background-color: #faf3f1;
    cursor: pointer;
  }

  :active {
    background-color: #eef7f1;
    outline: none;
  }
`;

class Menu extends PureComponent {
  render() {
    const { className, currentLength, error, maxLength, options } = this.props;

    return (
      <Container className={className}>
        {map(options, (option, i) => (
          <MenuItem selected={option.selected} key={option.name} onClick={option.onClick}>
            <Text color="solitude" letterSpacing={0.3} fontSize={15 / 16}>
              {option.name}
            </Text>
          </MenuItem>
        ))}
        {maxLength && (
          <Box grow>
            <Counter currentLength={currentLength} maxLength={maxLength} error={error} />
          </Box>
        )}
      </Container>
    );
  }
}

Menu.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      selected: PropTypes.bool,
    })
  ).isRequired,
};

export default Menu;
