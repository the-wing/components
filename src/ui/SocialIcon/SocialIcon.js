import PropTypes from 'prop-types';
import styled from 'styled-components';
import { responsive } from 'utils';

import facebook from 'assets/img/facebook.svg';
import instagram from 'assets/img/instagram.svg';
import twitter from 'assets/img/twitter.svg';
import web from 'assets/img/web.svg';

const assets = {
  facebook,
  instagram,
  twitter,
  web,
};

const SocialIcon = styled.img.attrs({
  alt: props => props.name,
  src: props => assets[props.name],
})`
  ${responsive('height', 'size', size => `${size}px`)};
  ${responsive('width', 'size', size => `${size}px`)};
`;

SocialIcon.propTypes = {
  name: PropTypes.oneOf(['facebook', 'instagram', 'twitter', 'web']).isRequired,
  size: PropTypes.number,
};

SocialIcon.defaultProps = {
  size: 23,
};

export default SocialIcon;
