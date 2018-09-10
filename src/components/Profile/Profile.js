import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from 'ui/Box/Box';
import Image from 'ui/Image/Image';
import Text from 'ui/Text/Text';
import theme from 'theme';

const Profile = ({ avatarUrl, headline, name, onClose }) => (
  <Box grow column color="linen">
    <Box hAlignContent="center">
      <Image width={125} height={125} url={avatarUrl} circle />
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
  </Box>
);

Profile.propTypes = {
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
};

Profile.defaultProps = {
  avatarUrl: theme.defaultAvatar,
  name: null,
};

export default Profile;
