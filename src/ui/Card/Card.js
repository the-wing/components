import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';

const StyledCard = styled.div.attrs({
  bgColor: props =>
    props.secondary ? props.theme.colors.blueDark.main : props.theme.colors.brandyPunch.main,
})`
  padding: ${props => (props.scalloped ? rem('1px') : '0')};
  background: ${props => (props.scalloped ? props.bgColor : 'none')};
  background: ${props =>
    props.scalloped
      ? `radial-gradient(
        circle at top left,
        transparent 10px,
        ${props.bgColor}
          0
      )
      top left,
    radial-gradient(
        circle at top right,
        transparent 10px,
        ${props.bgColor}
          0
      )
      top right`
      : 'none'};
  background-size: ${props => (props.scalloped ? '50%' : 'auto')};
  background-repeat: no-repeat;
  border: ${props => (props.scalloped ? '0' : `1px solid ${props.bgColor}`)};
`;

const Content = styled.div`
  padding: ${rem('30px')} ${rem('16px')};
  background: ${props => props.theme.colors.white.main};
  background: ${props =>
    props.scalloped
      ? `radial-gradient(
        circle at top left,
        transparent 10px,
        ${props.theme.colors.white.main} 0
      )
      top left,
    radial-gradient(
        circle at top right,
        transparent 10px,
        ${props.theme.colors.white.main} 0
      )
      top right`
      : props.theme.colors.white.main};
  background-size: 50%;
  background-repeat: no-repeat;
`;

const Card = ({ children, secondary, scalloped }) => {
  return (
    <StyledCard secondary={secondary} scalloped={scalloped}>
      <Content scalloped={scalloped}>{children}</Content>
    </StyledCard>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  scalloped: PropTypes.bool,
};

Card.defaultProps = {
  secondary: false,
  scalloped: false,
};

export default Card;
