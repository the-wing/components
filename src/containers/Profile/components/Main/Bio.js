import React from 'react';

import Box from 'ui/Box/Box';
import Section from 'ui/Section/Section';
import Text from 'ui/Text/Text';
import { TextRow } from 'ui/Loading';

import EmptyStateButton from '../EmptyStateButton';

const Bio = ({ firstName, loading, onEdit, readonly, text }) => {
  if (loading) {
    return (
      <Section>
        <Box margin={{ top: 31 / 16 }}>
          <TextRow style={{ width: 39, height: 13 }} />
        </Box>
        <Box>
          <TextRow style={{ width: 69, height: 1 }} />
        </Box>
        <Box grow>
          <Box>
            <TextRow style={{ width: 244, height: 7 }} />
          </Box>
          <Box margin={{ left: 9 / 16 }}>
            <TextRow style={{ width: 19, height: 7 }} />
          </Box>
        </Box>
        <Box grow>
          <Box>
            <TextRow style={{ width: 109, height: 7 }} />
          </Box>
          <Box margin={{ left: 9 / 16 }}>
            <TextRow style={{ width: 109, height: 7 }} />
          </Box>
          <Box margin={{ left: 9 / 16 }}>
            <TextRow style={{ width: 109, height: 7 }} />
          </Box>
        </Box>
        <Box grow>
          <Box>
            <TextRow style={{ width: 74, height: 7 }} />
          </Box>
          <Box margin={{ left: 9 / 16 }}>
            <TextRow style={{ width: 50, height: 7 }} />
          </Box>
          <Box margin={{ left: 9 / 16 }}>
            <TextRow style={{ width: 193, height: 7 }} />
          </Box>
        </Box>

        <Box grow>
          <Box>
            <TextRow style={{ width: 244, height: 7 }} />
          </Box>
          <Box margin={{ left: 9 / 16 }}>
            <TextRow style={{ width: 82, height: 7 }} />
          </Box>
        </Box>
      </Section>
    );
  }

  return (
    <Section title="Bio" noContent={!text && readonly}>
      {text && (
        <Box>
          <Text color="solitude" size={15 / 16} letterSpacing={0.2} lineHeight={20}>
            {text}
          </Text>
        </Box>
      )}
      {!text &&
        !readonly && (
          <EmptyStateButton
            onClick={onEdit}
            text="What makes you uniquely you? Or just tell us a fun fact or two."
          />
        )}
      {!text &&
        readonly && (
          <Text color="grayChateau" size={15 / 16} letterSpacing={0.2} lineHeight={20}>
            {firstName} hasn&#x27;t added a Bio.
          </Text>
        )}
    </Section>
  );
};

export default Bio;
