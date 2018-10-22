import React from 'react';
import { filter, get } from 'lodash';
import Box from 'ui/Box/Box';
import Section from 'ui/Section/Section';
import { TextRow } from 'ui/Loading';
import Text from 'ui/Text/Text';

import EmptyStateButton from '../EmptyStateButton';

const Occupations = ({ firstName, list, loading, onEdit, readonly }) => {
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

  const listLength = get(list, 'length', 0);
  const hasCompaniesOrPositions = filter(list, occ => {
    return get(occ, 'company.label') || get(occ, 'position.label');
  });

  return (
    <Section
      title="Current Occupation"
      noContent={listLength < 1 && hasCompaniesOrPositions.length < 1 && readonly}
    >
      {listLength > 0 &&
        hasCompaniesOrPositions.length > 0 &&
        list.map((occupation, index) => (
          <Box margin={index !== listLength - 1 ? { bottom: 28 / 16 } : {}}>
            <Text color="solitude" size={15 / 16} letterSpacing={0.2} lineHeight={20}>
              {get(occupation, 'company.label') && get(occupation, 'position.label')
                ? `${get(occupation, 'position.label', '')} at ${get(
                    occupation,
                    'company.label',
                    ''
                  )}`
                : `${get(occupation, 'position.label', '')}`}
            </Text>
          </Box>
        ))}
      {(listLength < 1 || hasCompaniesOrPositions.length < 1) &&
        !readonly && <EmptyStateButton onClick={onEdit} text="What's your day job?" />}
      {(listLength < 1 || hasCompaniesOrPositions.length < 1) &&
        readonly && (
          <Text color="grayChateau" size={15 / 16} letterSpacing={0.2} lineHeight={20}>
            {firstName} hasn&#x27;t added an Occupation
          </Text>
        )}
    </Section>
  );
};

export default Occupations;
