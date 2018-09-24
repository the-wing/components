import React from 'react';

import Box from 'ui/Box/Box';
import Text from 'ui/Text/Text';
import { TextRow } from 'ui/Loading';

const Headline = ({ text, loading }) => (
  <Box hAlignContent="center" margin={{ top: 13 / 16 }}>
    {!loading && (
      <Text color="solitude" align="center" lineHeight={22}>
        {text}
      </Text>
    )}
    {loading && <TextRow style={{ width: 195, height: 16 }} />}
  </Box>
);

export default Headline;
