import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styled from 'styled-components';
import theme from 'theme';

import Box from 'ui/Box/Box';
import Image from 'ui/Image/Image';
import SocialIcon from 'ui/SocialIcon/SocialIcon';
import Text from 'ui/Text/Text';

const SocialLink = styled.a`
  :hover {
    transform: scale(1.1);
  }
`;

const getSocialLink = (type, value) => {
  if (type === 'facebook') {
    return `https://www.facebook.com/${value}`;
  }

  if (type === 'instagram') {
    return `https://www.instagram.com/${value}`;
  }

  if (type === 'twitter') {
    return `https://www.twitter.com/${value}`;
  }

  if (type === 'web' && value.indexOf('http') === -1) {
    return `http://${value}`;
  }

  if (type === 'web') {
    return value;
  }

  return null;
};
const Head = ({ avatarUrl, headline, isEditing, name, social }) => {
  if (isEditing) {
    return <div>i am editing</div>;
  }

  return (
    <Box column padding={{ bottom: 29 / 16 }}>
      {/* Avatar */}
      <Box hAlignContent="center">
        <Image width={125} height={125} url={avatarUrl || theme.defaultAvatar} circle />
      </Box>

      {/* Name */}
      <Box hAlignContent="center" margin={{ top: 13 / 16 }}>
        <Text align="center" size={26 / 16} weight={800} letterSpacing={-0.54} lineHeight={30}>
          {name}
        </Text>
      </Box>

      {/* Headline */}
      <Box hAlignContent="center" margin={{ top: 13 / 16 }}>
        <Text color="solitude" align="center" lineHeight={22}>
          {headline}
        </Text>
      </Box>

      {/* Social */}
      <Box hAlignContent="center" margin={{ top: 45 / 16 }}>
        {_.map(social, (socialLink, type) => {
          if (!socialLink) {
            return false;
          }

          return (
            <Box key={type} padding={{ horizontal: 9.6 / 16 }}>
              <SocialLink href={getSocialLink(type, socialLink)} target="_blank">
                <SocialIcon name={type} />
              </SocialLink>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

Head.propTypes = {
  avatarUrl: PropTypes.string,
  headline: PropTypes.string,
  isEditing: PropTypes.bool,
  name: PropTypes.string,
  social: PropTypes.shape({
    facebook: PropTypes.string,
    instagram: PropTypes.string,
    twitter: PropTypes.string,
    web: PropTypes.string,
  }),
};

Head.defaultProps = {
  avatarUrl: null,
  headline: null,
  isEditing: false,
  name: null,
  social: {
    facebook: null,
    instagram: null,
    twitter: null,
    web: null,
  },
};

export default Head;
