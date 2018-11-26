import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from 'ui/Box/Box';
import Icon from 'ui/Icon/Icon';
import Text from 'ui/Text/Text';

export const StyledContent = styled(({ underline, ...rest }) => <Box {...rest} />)`
  border-bottom: ${props => (props.underline ? '1px solid rgba(164, 166, 168, 0.3)' : '')};

  > a,
  a:link {
    color: ${props => props.theme.colors.solitude.main};
    text-decoration: none;
  }
`;

const ListItem = ({ className, children, icon, underline }) => (
  <Box as="li" className={className}>
    <Box as="span" vAlignContent="center">
      {icon && (
        <Box width={40}>
          <Icon style={{ lineHeight: '30px' }} name={icon} size={15} color="grayChateau" />
        </Box>
      )}
      <StyledContent grow padding={{ vertical: 14 / 16 }} underline={underline}>
        <Text color="solitude" size={15 / 16} letterSpacing={0.2} lineHeight={20}>
          {children}
        </Text>
      </StyledContent>
    </Box>
  </Box>
);

ListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
  underline: PropTypes.bool,
};

ListItem.defaultProps = {
  className: null,
  icon: null,
  underline: false,
};

export default ListItem;
