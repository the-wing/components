import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-spring';

import Box from 'ui/Box/Box';
import Chip from 'ui/Chip/Chip';
import Section from 'ui/Section/Section';
import Text from 'ui/Text/Text';

import EmptyStateButton from './EmptyStateButton';

const Main = ({ asks, bio, industry, interests, occupations, offers, onEdit }) => (
  <Box column grow padding={{ horizontal: 2, bottom: 2 }} color="white">
    {/* BIO */}
    <Section title="Bio">
      {bio ? (
        <Box width={296}>
          <Text color="solitude" size={15 / 16} letterSpacing={0.2} lineHeight={20}>
            {bio}
          </Text>
        </Box>
      ) : (
        <EmptyStateButton
          onClick={onEdit}
          text="What makes you uniquely you? Or just tell us a fun fact or two."
        />
      )}
    </Section>

    {/* OCCUPATION */}
    <Section title="Current Occupation">
      {occupations.length > 0 && (occupations[0].company || occupations[0].position) ? (
        <Box width={296}>
          <Text color="solitude" size={15 / 16} letterSpacing={0.2} lineHeight={20}>
            {occupations[0].company
              ? `${occupations[0].position} at ${occupations[0].company}`
              : `${occupations[0].position}`}
          </Text>
        </Box>
      ) : (
        <EmptyStateButton onClick={onEdit} text="Add Occupation" />
      )}
    </Section>

    {/* INDUSTRY */}
    <Section title="Industry">
      {industry && industry.value && industry.label ? (
        <Box width={296}>
          <Text color="solitude" size={15 / 16} letterSpacing={0.2} lineHeight={20}>
            {industry.label}
          </Text>
        </Box>
      ) : (
        <EmptyStateButton onClick={onEdit} text="What industry do you work in?" />
      )}
    </Section>

    {/* OFFERS */}
    <Section title="Offers">
      {offers && offers.length > 0 ? (
        <Box wrap>
          <Transition
            keys={offers.map(offer => offer)}
            from={{ opacity: 0, transform: 'scale(0)' }}
            enter={{ opacity: 1, transform: 'scale(1)' }}
            leave={{ opacity: 0, transform: 'scale(0)' }}
          >
            {styles => {
              return offers.map(offer => (
                <Chip key={offer} text={offer} styles={styles} readonly />
              ));
            }}
          </Transition>
        </Box>
      ) : (
        <EmptyStateButton onClick={onEdit} text="I could teach a master class on..." />
      )}
    </Section>

    {/* ASKS */}
    <Section title="Asks">
      {asks && asks.length > 0 ? (
        <Box wrap>
          <Transition
            keys={asks.map(ask => ask)}
            from={{ opacity: 0, transform: 'scale(0)' }}
            enter={{ opacity: 1, transform: 'scale(1)' }}
            leave={{ opacity: 0, transform: 'scale(0)' }}
          >
            {styles => {
              return asks.map(ask => (
                <Chip key={ask} text={ask} color="panache" styles={styles} readonly />
              ));
            }}
          </Transition>
        </Box>
      ) : (
        <EmptyStateButton onClick={onEdit} text="I could use a hand with..." />
      )}
    </Section>

    {/* INTERESTS */}

    <Section title="Interested In">
      {interests && interests.length > 0 ? (
        <Box wrap>
          <Transition
            keys={interests.map(interest => interest)}
            from={{ opacity: 0, transform: 'scale(0)' }}
            enter={{ opacity: 1, transform: 'scale(1)' }}
            leave={{ opacity: 0, transform: 'scale(0)' }}
          >
            {styles => {
              return interests.map(interest => (
                <Chip key={interest} text={interest} color="concrete" styles={styles} readonly />
              ));
            }}
          </Transition>
        </Box>
      ) : (
        <EmptyStateButton onClick={onEdit} text="I&apos;m currently obsessed with..." />
      )}
    </Section>
  </Box>
);

Main.propTypes = {
  asks: PropTypes.arrayOf(PropTypes.string),
  bio: PropTypes.string,
  industry: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
  }),
  interests: PropTypes.arrayOf(PropTypes.string),
  occupation: PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
  }),
  offers: PropTypes.arrayOf(PropTypes.string),
  onEdit: PropTypes.func,
};

Main.defaultProps = {
  asks: [],
  bio: null,
  industry: {
    _id: null,
    name: null,
  },
  interests: [],
  occupation: {
    company: null,
    position: null,
  },
  offers: [],
  onEdit: null,
};

export default Main;
