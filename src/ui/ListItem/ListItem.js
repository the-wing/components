import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from 'ui/Box/Box';
import Icon from 'ui/Icon/Icon';
import Text from 'ui/Text/Text';

const Content = styled(({ underline, ...rest }) => <Box {...rest} />)`
  border-bottom: ${props => (props.underline ? '1px solid rgba(164, 166, 168, 0.3)' : '')};

  > a,
  a:link {
    color: ${props => props.theme.colors.solitude.main};
    text-decoration: none;
  }
`;

const ListItem = ({ children, icon, underline }) => (
  <Box as="li" vAlignContent="center">
    {icon && (
      <Box width={40}>
        <Icon style={{ lineHeight: '30px' }} name={icon} size={15} color="grayChateau" />
      </Box>
    )}

    <Content grow padding={{ vertical: 14 / 16 }} underline={underline}>
      <Text color="solitude" size={15 / 16} letterSpacing={0.2} lineHeight={20}>
        {children}
      </Text>
    </Content>
  </Box>
);

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
  underline: PropTypes.bool,
};

ListItem.defaultProps = {
  icon: null,
  underline: false,
};

export default ListItem;
