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

const SocialIcon = styled.div.attrs({
  title: props => props.name,
})`
  background: url(${props => assets[props.name]}) no-repeat;
  background-size: contain;
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
