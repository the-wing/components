import React from 'react';

import Box from 'ui/Box/Box';
import Section from 'ui/Section/Section';
import { TextRow } from 'ui/Loading';
import Text from 'ui/Text/Text';

import EmptyStateButton from '../EmptyStateButton';

const Occupations = ({ company, firstName, loading, onEdit, position, readonly }) => {
  if (loading) {
    return (
      <Section>
        <Box>
          <TextRow style={{ width: 117, height: 13 }} />
        </Box>
        <Box>
          <TextRow style={{ width: 61, height: 1 }} />
        </Box>
        <Box grow>
          <Box>
            <TextRow style={{ width: 106, height: 7 }} />
          </Box>
          <Box margin={{ left: 9 / 16 }}>
            <TextRow style={{ width: 17, height: 7 }} />
          </Box>
          <Box margin={{ left: 9 / 16 }}>
            <TextRow style={{ width: 154, height: 7 }} />
          </Box>
        </Box>
        <Box margin={{ top: 42 / 16 }}>
          <TextRow style={{ width: 117, height: 13 }} />
        </Box>
        <Box>
          <TextRow style={{ width: 61, height: 1 }} />
        </Box>
        <Box grow>
          <Box>
            <TextRow style={{ width: 178, height: 7 }} />
          </Box>
        </Box>
      </Section>
    );
  }

  return (
    <Section title="Current Occupation">
      {(company || position) && (
        <Box width={296}>
          <Text color="solitude" size={15 / 16} letterSpacing={0.2} lineHeight={20}>
            {company ? `${position} at ${company}` : `${position}`}
          </Text>
        </Box>
      )}
      {!company &&
        !position &&
        !readonly && <EmptyStateButton onClick={onEdit} text="Add Occupation" />}
      {!company &&
        !position &&
        readonly && (
          <Text color="solitude" size={15 / 16} letterSpacing={0.2} lineHeight={20}>
            {firstName} hasn&#x27;t added an Occupation
          </Text>
        )}
    </Section>
  );
};

export default Occupations;
