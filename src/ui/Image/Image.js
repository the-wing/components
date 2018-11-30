import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';

import Box from 'ui/Box/Box';

// For now, this only accounts for a hover state when image is larger than default size...
// When we need a hover state for something other than an avatar, change this.
const HoverText = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-bottom: 20px;
  opacity: 0;
  font-family: ${props => props.theme.text.secondary};
  font-size: calc(13 / 16 * 1rem);
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  background: rgba(0, 0, 0, 0.5);
  color: ${props => props.theme.colors.white.main};
`;

const Container = styled(({ circle, ...props }) => <Box {...props} />)`
  position: relative;
  padding: 0;
  position: relative;
  border-radius: ${props => (props.circle ? '50%' : '0')};
  box-sizing: border-box;
  overflow: hidden;
  height: ${props => (props.height ? rem(props.height) : '100%')};
  width: ${props => (props.width ? rem(props.width) : '100%')};

  &:hover {
    cursor: ${props => (props.hoverText ? 'pointer' : 'inherit')};

    > ${HoverText} {
      opacity: 1;
    }
  }
`;

const StyledImage = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  border-radius: ${props => (props.circle ? '50%' : '0')};
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const Image = ({ circle, className, height, hoverText, title, url, width }) => (
  <Container
    className={className}
    circle={circle}
    height={height}
    width={width}
    vAlignContent="center"
    hAlignContent="center"
  >
    {hoverText && <HoverText>{hoverText}</HoverText>}
    <StyledImage title={title} url={url} />
  </Container>
);

Image.propTypes = {
  circle: PropTypes.bool,
  height: PropTypes.number,
  title: PropTypes.string,
  url: PropTypes.string,
  width: PropTypes.number,
};

Image.defaultProps = {
  circle: false,
  height: null,
  title: '',
  url: '',
  width: null,
};

export default Image;
