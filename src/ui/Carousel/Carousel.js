import React, { Children, PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactSlick from 'react-slick';
import styled from 'styled-components';
import { rem, rgba } from 'polished';
import { Media } from 'react-breakpoints';
import arrow from 'assets/img/arrow.svg';
import slick from 'slick-carousel/slick/slick.css';
import slickTheme from 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  position: relative;
  margin-bottom: ${rem('60px')};
  width: 100%;
  flex: 1;
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  box-shadow: ${props =>
    `inset ${props.isLastSlide ? rem('40px') : rem('-40px')} 0 ${rem('60px')} ${rem('-30px')} ${
      props.theme.colors.linen.main
    }`};
  pointer-events: none;
  z-index: 2;

  &::before {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    left: ${props => (props.isLastSlide ? 'auto' : '0')};
    right: ${props => (props.isLastSlide ? '0' : 'auto')};
    height: 100%;
    width: ${rem('30px')};
    background: ${props => props.theme.colors.linen.main};
    z-index: 3;
  }
`;

const StyledReactSlick = styled(ReactSlick)`
  ${slick} ${slickTheme}

  .slick-slide.slick-center > div {
    margin: 0 ${rem('12px')};
  }

  .slick-list {
    margin: 0;
    z-index: 1;

    &:hover {
      cursor: ${props => (props.numberOfSlides < 2 ? 'cursor' : 'pointer')};
    }
  }
`;

const StyledPrevArrow = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${rem('44px')};
  height: ${rem('44px')};
  bottom: -${rem('46px')};
  left: 0;
  margin-left: ${rem('30px')};
  pointer-events: all;
  z-index: 1;

  &::after {
    content: '';
    display: block;
    height: ${rem('21px')};
    width: ${rem('11px')};
    background: url(${arrow}) no-repeat;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const StyledNextArrow = styled(StyledPrevArrow)`
  left: auto;
  right: 0;
  margin-left: 0;
  margin-right: ${rem('30px')};

  &::after {
    transform: scaleX(-1);
  }
`;

const DotContainer = styled.div`
  position: absolute;
  bottom: -${rem('29px')};
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
    opacity: 0.5;
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
          const {
            children: {
              props: { onClick },
            },
            className,
          } = props;
          if (className === 'slick-active') {
            return <Dot key="active-dot" onClick={onClick} active />;
          }
          return <Dot key={`inactive-dot-${index}`} onClick={onClick} />;
        })}
      </DotList>
    </DotContainer>
  );
};

const NextArrow = ({ onClick }) => <StyledNextArrow onClick={onClick} />;

const PrevArrow = ({ onClick }) => <StyledPrevArrow onClick={onClick} />;

class Carousel extends PureComponent {
  state = {
    slideIndex: 0,
  };

  beforeChange = (prevIndex, nextIndex) => {
    this.setState(() => ({ slideIndex: nextIndex }));
  };

  render() {
    const {
      arrows,
      centerMode,
      centerPadding,
      children,
      dots,
      infinite,
      responsiveSettings,
      speed,
      slidesToShow,
      slidesToScroll,
    } = this.props;

    const settings = {
      appendDots,
      arrows,
      beforeChange: this.beforeChange,
      centerMode,
      centerPadding: centerMode ? centerPadding : null,
      className: centerMode ? 'center' : '',
      dots,
      dotsClass: '',
      infinite,
      initialSlide: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      speed,
      slidesToShow,
      slidesToScroll,
    };

    return (
      <Container>
        <Overlay isLastSlide={this.state.slideIndex + 1 === children.length} />
        <Media>
          {({ breakpoints }) => (
            <StyledReactSlick
              {...settings}
              responsive={[
                {
                  breakpoint: breakpoints.desktopLarge + 1,
                  settings: {
                    ...responsiveSettings.desktopLarge,
                  },
                },
                {
                  breakpoint: breakpoints.desktop + 1,
                  settings: {
                    ...responsiveSettings.desktop,
                  },
                },
                {
                  breakpoint: breakpoints.tablet + 1,
                  settings: {
                    arrows: false,
                    ...responsiveSettings.tablet,
                  },
                },
                {
                  breakpoint: breakpoints.mobile + 1,
                  settings: {
                    arrows: false,
                    slidesToShow: 1,
                    ...responsiveSettings.mobile,
                  },
                },
              ]}
            >
              {Children.map(children, child => (
                <div>{child}</div>
              ))}
            </StyledReactSlick>
          )}
        </Media>
      </Container>
    );
  }
}

Carousel.propTypes = {
  arrows: PropTypes.bool,
  centerPadding: PropTypes.string,
  children: PropTypes.node.isRequired,
  dots: PropTypes.bool,
  infinite: PropTypes.bool,
  responsiveSettings: PropTypes.shape({
    desktopLarge: PropTypes.shape({}),
    desktop: PropTypes.shape({}),
    mobile: PropTypes.shape({}),
    tablet: PropTypes.shape({}),
  }),
  speed: PropTypes.number,
  slidesToShow: PropTypes.number,
  slidesToScroll: PropTypes.number,
};

Carousel.defaultProps = {
  arrows: true,
  centerMode: true,
  centerPadding: '20px',
  dots: true,
  infinite: true,
  responsiveSettings: {
    desktopLarge: {},
    desktop: {},
    mobile: {},
    tablet: {},
  },
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default Carousel;
