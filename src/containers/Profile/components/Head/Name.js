import React from 'react';

import Box from 'ui/Box/Box';
import Text from 'ui/Text/Text';
import { TextRow } from 'ui/Loading';

const Name = ({ first, last, loading }) => (
  <Box hAlignContent="center" margin={{ top: 13 / 16 }}>
    {!loading && (
      <Text align="center" size={26 / 16} weight={800} letterSpacing={-0.54} lineHeight={30}>
        {first || last ? `${first} ${last}` : 'No name'}
      </Text>
    )}
    {loading && <TextRow style={{ width: 141, height: 22 }} />}
  </Box>
);

export default Name;
