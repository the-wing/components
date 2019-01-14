import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';

const TriangleContainer = styled.div`
  position: absolute;
  top: ${rem('-3px')};
  left: ${rem('-3px')};

  path {
    stroke: ${props =>
      props.secondary ? props.theme.colors.blueDark.main : props.theme.colors.brandyPunch.main};
  }
`;

const RightTriangleContainer = styled(TriangleContainer)`
  left: auto;
  right: ${rem('-3px')};
  transform: scaleX(-1);
`;

const Triangle = () => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="corner" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path d="M0.5,0.5 L0.5,22.7928932 L22.7928932,0.5 L0.5,0.5 Z" id="Rectangle" fill="#FBF1ED" />
    </g>
  </svg>
);

const StyledCard = styled.div`
  position: relative;
  background: ${props => props.theme.colors[`${props.bgColor}`].main};
  border: 1px solid
    ${props =>
      props.secondary ? props.theme.colors.blueDark.main : props.theme.colors.brandyPunch.main};
  padding: ${rem('30px')} ${rem('16px')};
  margin: ${rem('3px')} 0 ${rem('10px')} 0;
  box-shadow: ${props =>
    props.shadow ? `0 7px 10px 0 ${props.theme.colors.albescentWhite.main}` : 'none'};
`;

const Card = ({ children, corners, secondary, shadow, bgColor }) => {
  return (
    <StyledCard secondary={secondary} corners={corners} shadow={shadow} bgColor={bgColor}>
      {corners && (
        <TriangleContainer secondary={secondary}>
          <Triangle />
        </TriangleContainer>
      )}
      {corners && (
        <RightTriangleContainer secondary={secondary}>
          <Triangle />
        </RightTriangleContainer>
      )}
      {children}
    </StyledCard>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  corners: PropTypes.bool,
  shadow: PropTypes.bool,
  bgColor: PropTypes.string,
};

Card.defaultProps = {
  secondary: false,
  corners: false,
  shadow: false,
  bgColor: 'white',
};

export default Card;
