import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'theme';
import { Transition } from 'react-spring';

import Box from 'ui/Box/Box';
import Button from 'ui/Button/Button';
import Icon from 'ui/Icon/Icon';
import Text from 'ui/Text/Text';

const Container = styled.div`
  border: 1px solid rgba(7, 36, 79, 0.2);
  border-radius: 22px;
  height: 32px;
`;

const Chip = ({ readonly, color, onRemove, text }) => (
  <Transition
    from={{ opacity: 0, transform: 'scale(0)' }}
    enter={{ opacity: 1, transform: 'scale(1)' }}
    leave={{ opacity: 0, transform: 'scale(0)' }}
  >
    {styles => (
      <Container
        key={text}
        color={color}
        margin={{ right: 0.35, bottom: 0.7 }}
        vAlignContent="center"
        style={styles}
      >
        <Box grow height="100%" padding={{ horizontal: 1 }} vAlignContent="center">
          <Text color="solitude" size={13 / 16}>
            {text}
          </Text>
        </Box>
        {!readonly && (
          <Box margin={{ right: 1 }}>
            <Button onClick={onRemove} transparent>
              <Icon
                size={10}
                name="close"
                color="solitude"
                style={{ marginTop: '2.7px' }}
                weight="800"
              />
            </Button>
          </Box>
        )}
      </Container>
    )}
  </Transition>
);

Chip.propTypes = {
  readonly: PropTypes.bool,
  color: PropTypes.oneOf(Object.keys(theme.colors)),
  text: PropTypes.string.isRequired,
  onRemove: PropTypes.func,
};

Chip.defaultProps = {
  readonly: false,
  color: 'pink',
  onRemove: null,
};

export default Chip;
