import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';

const StyledMessage = styled.div`
  background: ${props => props.theme.colors.potpourri.main};
  padding: ${rem('18px')} ${rem('20px')};
  border-radius: ${rem('40px')};
`;

const Message = ({ children }) => <StyledMessage>{children}</StyledMessage>;

Message.propTypes = {
  children: PropTypes.oneOf(PropTypes.node, PropTypes.arrayOf(PropTypes.node)).isRequired,
};

export default Message;
