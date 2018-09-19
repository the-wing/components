import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Transition } from 'react-spring';

import Box from 'ui/Box/Box';
import Chip from 'ui/Chip/Chip';
import Section from 'ui/Section/Section';
import Text from 'ui/Text/Text';

import EmptyStateButton from './EmptyStateButton';

const Main = ({
  asks,
  bio,
  firstName,
  industry,
  interests,
  occupations,
  offers,
  onEdit,
  readonly,
}) => {
  const currentOccupation = occupations && occupations.length > 0 && occupations[0];
  const company = _.get(currentOccupation, 'company.label', null);
  const position = _.get(currentOccupation, 'position.label', null);

  return (
    <Box column grow padding={{ horizontal: 2, vertical: 2 }} color="white">
      {/* BIO */}
      <Section title="Bio">
        {bio && (
          <Box width={296}>
            <Text color="solitude" size={15 / 16} letterSpacing={0.2} lineHeight={20}>
              {bio}
            </Text>
          </Box>
        )}
        {!bio &&
          !readonly && (
            <EmptyStateButton
              onClick={onEdit}
              text="What makes you uniquely you? Or just tell us a fun fact or two."
            />
          )}
        {!bio &&
          readonly && (
            <Text color="solitude" size={15 / 16} letterSpacing={0.2} lineHeight={20}>
              {firstName} hasn&#x27;t added a Bio.
            </Text>
          )}
      </Section>

      {/* OCCUPATION */}
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

      {/* INDUSTRY */}
      <Section title="Industry">
        {_.get(industry, 'label', null) && (
          <Box width={296}>
            <Text color="solitude" size={15 / 16} letterSpacing={0.2} lineHeight={20}>
              {industry.label}
            </Text>
          </Box>
        )}
        {!_.get(industry, 'label', null) &&
          !readonly && <EmptyStateButton onClick={onEdit} text="What industry do you work in?" />}
        {!_.get(industry, 'label', null) &&
          readonly && (
            <Text color="solitude" size={15 / 16} letterSpacing={0.2} lineHeight={20}>
              {firstName} hasn&#x27;t added an Industry
            </Text>
          )}
      </Section>

      {/* OFFERS */}
      <Section title="Offers">
        {offers.length > 0 && (
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
        )}
        {offers.length < 1 &&
          !readonly && (
            <EmptyStateButton onClick={onEdit} text="I could teach a master class on..." />
          )}
        {offers.length < 1 &&
          readonly && (
            <Text color="solitude" size={15 / 16} letterSpacing={0.2} lineHeight={20}>
              {firstName} hasn&#x27;t added any Offers
            </Text>
          )}
      </Section>

      {/* ASKS */}
      <Section title="Asks">
        {asks.length > 0 && (
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
        )}
        {asks.length < 1 &&
          !readonly && <EmptyStateButton onClick={onEdit} text="I could use a hand with..." />}
        {asks.length < 1 &&
          readonly && (
            <Text color="solitude" size={15 / 16} letterSpacing={0.2} lineHeight={20}>
              {firstName} hasn&#x27;t added any Asks
            </Text>
          )}
      </Section>

      {/* INTERESTS */}

      <Section title="Interested In">
        {interests.length > 0 && (
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
        )}
        {interests.length < 1 &&
          !readonly && (
            <EmptyStateButton onClick={onEdit} text="I&apos;m currently obsessed with..." />
          )}
        {interests.length < 1 &&
          readonly && (
            <Text color="solitude" size={15 / 16} letterSpacing={0.2} lineHeight={20}>
              {firstName} hasn&#x27;t added any Interests
            </Text>
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
  firstName: PropTypes.string,
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
  occupations: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      }),
      position: PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      }),
    })
  ),
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  onEdit: PropTypes.func,
  readonly: PropTypes.bool,
};

Main.defaultProps = {
  asks: [],
  bio: null,
  firstName: 'Member',
  industry: {
    _id: null,
    name: null,
  },
  interests: [],
  occupations: [],
  offers: [],
  onEdit: null,
  readonly: false,
};

export default Main;
