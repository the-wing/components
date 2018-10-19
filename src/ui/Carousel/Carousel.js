import React, { Children, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactSlick from 'react-slick';
import styled, { createGlobalStyle } from 'styled-components';
import { rem, rgba } from 'polished';
import { Media } from 'react-breakpoints';
import arrow from 'assets/img/arrow.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlickOverrides = createGlobalStyle`
  .slick-slider {
    background: ${props => props.theme.colors.linen.main};

    &::after {
      content: '';
      position: absolute;
      left: 0; right: 0;
      top: 0; bottom: 0;
      box-shadow: ${props =>
        `inset 40px 0px 60px -30px ${props.theme.colors.linen.main}, inset -40px 0px 60px -30px ${
          props.theme.colors.linen.main
        }`};
    }
  }

  .slick-slide.slick-center {
    margin-left: auto;
    margin-right: auto;
  }
`;

const StyledPrevArrow = styled.div`
  height: ${rem('21px')};
  width: ${rem('11px')};
  background: url(${arrow}) no-repeat;
  position: absolute;
  bottom: -${rem('44px')};
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
  bottom: -${rem('36px')};
  width: 100%;
  margin: 0 auto;
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
  <Fragment>
    <SlickOverrides />
    <Media>
      {({ breakpoints }) => (
        <ReactSlick
          appendDots={appendDots}
          arrows={arrows}
          centerMode
          centerPadding="20px"
          dots={dots}
          dotsClass="" // Override slick-dots class
          infinite={infinite}
          initialSlide={0}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
          responsive={[
            {
              breakpoint: breakpoints.tablet,
              settings: {
                arrows: false,
              },
            },
            {
              breakpoint: breakpoints.mobile,
              settings: {
                arrows: false,
                slidesToShow: 1,
              },
            },
          ]}
          speed={speed}
          slidesToShow={slidesToShow}
          slidesToScroll={slidesToScroll}
          swipeToSlide
        >
          {Children.map(children, child => (
            <div>{child}</div>
          ))}
        </ReactSlick>
      )}
    </Media>
  </Fragment>
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
  arrows: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default Carousel;
