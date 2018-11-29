import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import pinkCurve from 'assets/img/pinkCurve.svg';

const StyledMessage = styled.div`
  position: relative;
  background: ${props => props.theme.colors.potpourri.main};
  padding: ${rem('14px')} ${rem('20px')};
  margin-top: ${rem('10px')};

  &::before {
    position: absolute;
    top: ${rem('-10px')};
    left: ${rem('15px')};
    display: block;
    content: '';
    width: ${rem('13px')};
    height: ${rem('10px')};
    background: url(${pinkCurve}) no-repeat;
    background-size: cover;
  }

  @media ${props => props.theme.queries.tablet} {
    border-radius: ${rem('40px')};
    margin-top: 0;

    &::before {
      display: none;
    }
  }
`;

const Message = ({ children, className }) => (
  <StyledMessage className={className}>{children}</StyledMessage>
);

Message.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default Message;
