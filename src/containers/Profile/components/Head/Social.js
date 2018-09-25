import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Circle } from 'ui/Loading';

import Box from 'ui/Box/Box';
import SocialIcon from 'ui/SocialIcon/SocialIcon';

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

const Social = ({ links, loading }) => (
  <Box hAlignContent="center" margin={{ top: 45 / 16 }}>
    {!loading &&
      _.map(links, (link, type) => {
        if (!link) {
          return false;
        }

        return (
          <Box key={type} padding={{ horizontal: 9.6 / 16 }}>
            <SocialLink href={getSocialLink(type, link)} target="_blank">
              <SocialIcon name={type} />
            </SocialLink>
          </Box>
        );
      })}
    {loading && (
      <Fragment>
        <Box padding={{ horizontal: 9.6 / 16 }}>
          <Circle style={{ width: 25, height: 25 }} />
        </Box>
        <Box padding={{ horizontal: 9.6 / 16 }}>
          <Circle style={{ width: 25, height: 25 }} />
        </Box>
        <Box padding={{ horizontal: 9.6 / 16 }}>
          <Circle style={{ width: 25, height: 25 }} />
        </Box>
      </Fragment>
    )}
  </Box>
);

export default Social;
