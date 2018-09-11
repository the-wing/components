import React from 'react';

import Box from 'ui/Box/Box';
import Button from 'ui/Button/Button';
import Icon from 'ui/Icon/Icon';
import Text from 'ui/Text/Text';

const EmptyStateButton = ({ onClick, text }) => (
  <Button color="terracota" height="auto" lineHeight="22px" onClick={onClick} transparent>
    <Box display="flex">
      <Icon name="add" size={10} color="terracota" />
      <Text color="terracota" size={13 / 16} style={{ marginLeft: '0.625rem' }}>
        {text}
      </Text>
    </Box>
  </Button>
);

export default EmptyStateButton;
