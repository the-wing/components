import React, { Children } from 'react';
import PropTypes from 'prop-types';
import ReactSlick from 'react-slick';
import styled from 'styled-components';
import { rem, rgba } from 'polished';
import arrow from 'assets/img/arrow.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledPrevArrow = styled.div`
  height: ${rem('21px')};
  width: ${rem('11px')};
  background: url(${arrow}) no-repeat;
  position: absolute;
  bottom: -44px;
  left: 0;
  margin-left: ${rem('30px')};
  pointer-events: all;
  z-index: 1;

  &:hover {
    cursor: pointer;
  }
`;

const StyledNextArrow = styled(StyledPrevArrow)`
  transform: rotate(180deg);
  left: auto;
  right: 0;
  margin-left: 0;
  margin-right: ${rem('30px')};
`;

const DotContainer = styled.div`
  position: absolute;
  bottom: -36px;
  left: ${rem('78px')};
  right: 0;
  max-width: ${rem('192px')};
  z-index: 0;
`;

const DotList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Dot = styled.li`
  width: ${rem('5px')};
  height: ${rem('5px')};
  border-radius: 50%;
  background: ${props => (props.active ? props.theme.colors.gold.main : 'transparent')};
  border: 1.5px solid
    ${props =>
      props.active ? props.theme.colors.gold.main : rgba(props.theme.colors.solitude.main, 0.3)};

  &:hover {
    cursor: pointer;
  }

  &:not(:last-of-type) {
    margin-right: ${rem('24px')};
  }
`;

const appendDots = dots => {
  return (
    <DotContainer>
      <DotList>
        {dots.map(({ props }, index) => {
          const { className } = props;
          if (className === 'slick-active') {
            return <Dot key="active-dot" active />;
          }
          return <Dot key={`inactive-dot-${index}`} />;
        })}
      </DotList>
    </DotContainer>
  );
};

const NextArrow = ({ onClick }) => <StyledNextArrow onClick={onClick} />;

const PrevArrow = ({ onClick }) => <StyledPrevArrow onClick={onClick} />;

const Carousel = ({ arrows, children, dots, infinite, speed, slidesToShow, slidesToScroll }) => (
  <ReactSlick
    appendDots={appendDots}
    arrows={arrows}
    dots={dots}
    dotsClass="" // Override slick-dots class
    infinite={infinite}
    nextArrow={<NextArrow />}
    prevArrow={<PrevArrow />}
    speed={speed}
    slidesToShow={slidesToShow}
    slidesToScroll={slidesToScroll}
  >
    {Children.map(children, child => child)}
  </ReactSlick>
);

Carousel.propTypes = {
  arrows: PropTypes.bool,
  children: PropTypes.node.isRequired,
  dots: PropTypes.bool,
  infinite: PropTypes.bool,
  speed: PropTypes.number,
  slidesToShow: PropTypes.number,
  slidesToScroll: PropTypes.number,
};

Carousel.defaultProps = {
  arrows: false,
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default Carousel;
