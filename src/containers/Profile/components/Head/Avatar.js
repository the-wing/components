import React from 'react';
import theme from 'theme';

import Box from 'ui/Box/Box';
import Image from 'ui/Image/Image';

const Avatar = ({ title, url }) => (
  <Box hAlignContent="center">
    <Image width={125} height={125} url={url} title={title} circle />
  </Box>
);

export default Avatar;
