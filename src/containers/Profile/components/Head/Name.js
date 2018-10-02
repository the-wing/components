import React from 'react';

import Box from 'ui/Box/Box';
import Text from 'ui/Text/Text';
import { TextRow } from 'ui/Loading';

const getName = (first, last) => {
  if (first && !last) {
    return first;
  }

  if (first && last) {
    return `${first} ${last}`;
  }

  return 'No name';
};

const Name = ({ first, last, loading }) => (
  <Box hAlignContent="center" margin={{ top: 13 / 16 }}>
    {!loading && (
      <Text align="center" size={26 / 16} weight={800} letterSpacing={-0.54} lineHeight={30}>
        {getName(first, last)}
      </Text>
    )}
    {loading && <TextRow style={{ width: 141, height: 22 }} />}
  </Box>
);

export default Name;
