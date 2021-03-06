import React from 'react';
import get from 'lodash/get';

import Box from 'ui/Box/Box';
import Section from 'ui/Section/Section';
import Text from 'ui/Text/Text';

import EmptyStateButton from '../EmptyStateButton';

const Industry = ({ firstName, industry, loading, onEdit, readonly }) => {
  if (loading) {
    return null;
  }

  return (
    <Section title="Industry" noContent={!get(industry, 'label', null) && readonly}>
      {get(industry, 'label', null) && (
        <Box width={296}>
          <Text color="solitude" size={15 / 16} letterSpacing={0.2} lineHeight={20}>
            {industry.label}
          </Text>
        </Box>
      )}
      {!get(industry, 'label', null) &&
        !readonly && <EmptyStateButton onClick={onEdit} text="What industry do you work in?" />}
      {!get(industry, 'label', null) &&
        readonly && (
          <Text color="grayChateau" size={15 / 16} letterSpacing={0.2} lineHeight={20}>
            {firstName} hasn&#x27;t added an Industry
          </Text>
        )}
    </Section>
  );
};

export default Industry;
