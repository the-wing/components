import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-spring';

import Box from 'ui/Box/Box';
import Chip from 'ui/Chip/Chip';
import Section from 'ui/Section/Section';
import Text from 'ui/Text/Text';

import EmptyStateButton from './EmptyStateButton';

const Main = ({ asks, bio, industry, interests, occupations, offers, onEdit }) => {
  const currentOccupation = occupations && occupations.length > 0 && occupations[0];
  const company = _.get(currentOccupation, 'company.label', null);
  const position = _.get(currentOccupation, 'position.label', null);

  return (
    <Box column grow padding={{ horizontal: 2, vertical: 2 }} color="white">
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
        {currentOccupation && (company || position) ? (
          <Box width={296}>
            <Text color="solitude" size={15 / 16} letterSpacing={0.2} lineHeight={20}>
              {company ? `${position} at ${company}` : `${position}`}
            </Text>
          </Box>
        ) : (
          <EmptyStateButton onClick={onEdit} text="Add Occupation" />
        )}
      </Section>

      {/* INDUSTRY */}
      <Section title="Industry">
        {industry && industry.label ? (
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
              keys={offers.map(offer => offer.value)}
              from={{ opacity: 0, transform: 'scale(0)' }}
              enter={{ opacity: 1, transform: 'scale(1)' }}
              leave={{ opacity: 0, transform: 'scale(0)' }}
            >
              {styles => {
                return offers.map(offer => (
                  <Chip key={offer.value} text={offer.label} styles={styles} readonly />
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
              keys={asks.map(ask => ask.value)}
              from={{ opacity: 0, transform: 'scale(0)' }}
              enter={{ opacity: 1, transform: 'scale(1)' }}
              leave={{ opacity: 0, transform: 'scale(0)' }}
            >
              {styles => {
                return asks.map(ask => (
                  <Chip key={ask.value} text={ask.label} color="panache" styles={styles} readonly />
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
              keys={interests.map(interest => interest.value)}
              from={{ opacity: 0, transform: 'scale(0)' }}
              enter={{ opacity: 1, transform: 'scale(1)' }}
              leave={{ opacity: 0, transform: 'scale(0)' }}
            >
              {styles => {
                return interests.map(interest => (
                  <Chip
                    key={interest.value}
                    text={interest.label}
                    color="concrete"
                    styles={styles}
                    readonly
                  />
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
};

Main.propTypes = {
  asks: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  bio: PropTypes.string,
  industry: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
  }),
  interests: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  occupation: PropTypes.shape({
    company: PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
    position: PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  }),
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
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
    company: {
      label: null,
      value: null,
    },
    position: {
      label: null,
      value: null,
    },
  },
  offers: [],
  onEdit: null,
};

export default Main;
