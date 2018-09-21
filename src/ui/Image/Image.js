import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { responsive } from 'utils';

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
  height: ${props => props.height}px;
  padding: 0;
  position: relative;
  border-radius: ${props => (props.circle ? '50%' : '0')};
  box-sizing: border-box;
  overflow: hidden;
  ${responsive('height', 'height', value => `${value}px`)};
  ${responsive('width', 'width', value => `${value}px`)};

  &:hover {
    cursor: ${props => (props.hoverText ? 'pointer' : 'inherit')};

    > ${HoverText} {
      opacity: 1;
    }
  }
`;

const StyledImage = styled.img`
  border-radius: ${props => (props.circle ? '50%' : '0')};
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Image = ({ alt, circle, height, hoverText, title, url, width }) => (
  <Container
    circle={circle}
    height={height}
    width={width}
    vAlignContent="center"
    hAlignContent="center"
  >
    {hoverText && <HoverText>{hoverText}</HoverText>}
    <StyledImage alt={alt} title={title} src={url} />
  </Container>
);

Image.propTypes = {
  alt: PropTypes.string,
  circle: PropTypes.bool,
  height: PropTypes.number,
  title: PropTypes.string,
  url: PropTypes.string,
  width: PropTypes.number,
};

Image.defaultProps = {
  alt: '',
  circle: false,
  height: 32,
  title: '',
  url: '',
  width: 32,
};

export default Image;
