import React from 'react';
import PropTypes from 'prop-types';

import Box from 'ui/Box/Box';
import Button from 'ui/Button/Button';
import Icon from 'ui/Icon/Icon';
import Text from 'ui/Text/Text';

const EmptyStateButton = ({ noIcon, onClick, text }) => (
  <Button color="terracota" height="auto" lineHeight="22px" onClick={onClick} transparent>
    <Box display="flex">
      {!noIcon && <Icon name="add" size={10} color="terracota" />}
      <Text color="terracota" size={13 / 16} style={{ marginLeft: noIcon ? '0' : '0.625rem' }}>
        {text}
      </Text>
    </Box>
  </Button>
);

EmptyStateButton.propTypes = {
  noIcon: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

EmptyStateButton.defaultProps = {
  noIcon: false,
};

export default EmptyStateButton;
