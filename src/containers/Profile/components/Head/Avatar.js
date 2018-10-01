import React from 'react';
import theme from 'theme';

import Box from 'ui/Box/Box';
import Image from 'ui/Image/Image';

const Avatar = ({ loading, url }) => (
  <Box hAlignContent="center">
    <Image
      width={125}
      height={125}
      url={loading ? 'assets/img/defaultAvatar.png' : url || 'assets/img/defaultAvatar.png'}
      circle
    />
  </Box>
);

export default Avatar;
