import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { responsive } from 'utils';

import Box from 'ui/Box/Box';

const Container = styled(Box)`
  height: ${props => props.height}px;
  padding: 0;
  position: relative;
  ${responsive('height', 'height', value => `${value}px`)};
  ${responsive('width', 'width', value => `${value}px`)};
`;

const StyledImage = styled.img`
  border-radius: ${props => (props.circle ? '50%' : '0')};
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Image = ({ alt, circle, height, title, url, width }) => (
  <Container height={height} width={width} vAlignContent="center" hAlignContent="center">
    <StyledImage alt={alt} circle={circle} title={title} src={url} />
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
