import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';

import Icon from 'ui/Icon/Icon';

const StyledListItem = styled.li`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
`;

const IconContainer = styled.span`
  display: inline-block;
  width: ${rem('40px')};
`;

export const StyledContent = styled.span`
  display: flex;
  flex: 1;
  padding: ${rem('14px')} 0;
  border-bottom: ${props => (props.underline ? '1px solid rgba(164, 166, 168, 0.3)' : '')};

  > a,
  a:link {
    color: ${props => props.theme.colors.solitude.main};
    text-decoration: none;
  }
`;

const Text = styled.span`
  color: ${props => props.theme.colors.solitude.main};
  font-size: ${rem('15px')};
  letter-spacing: 0.2px;
  line-height: ${rem('20px')};
`;

const ListItem = ({ className, children, icon, underline }) => (
  <StyledListItem className={className}>
    {icon && (
      <IconContainer>
        <Icon style={{ lineHeight: '30px' }} name={icon} size={15} color="grayChateau" />
      </IconContainer>
    )}
    <StyledContent underline={underline}>
      <Text>{children}</Text>
    </StyledContent>
  </StyledListItem>
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
