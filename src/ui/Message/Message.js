import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import { queries } from 'breakpoints';

const StyledMessage = styled.div`
  background: ${props => props.theme.colors.potpourri.main};
  padding: ${rem('14px')} ${rem('20px')};

  @media ${queries.tablet} {
    border-radius: ${rem('40px')};
  }
`;

const Message = ({ children, className }) => (
  <StyledMessage className={className}>{children}</StyledMessage>
);

Message.propTypes = {
  children: PropTypes.oneOf(PropTypes.node, PropTypes.arrayOf(PropTypes.node)).isRequired,
};

export default Message;
