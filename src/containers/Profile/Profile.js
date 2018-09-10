import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';
import styled from 'styled-components';
import { Transition } from 'react-spring';
import theme from 'theme';

import Box from 'ui/Box/Box';
import Chip from 'ui/Chip/Chip';
import Image from 'ui/Image/Image';
import List from 'ui/List/List';
import ListItem from 'ui/ListItem/ListItem';
import Section from 'ui/Section/Section';
import SocialIcon from 'ui/SocialIcon/SocialIcon';
import Text from 'ui/Text/Text';

import ProfileContainer from './ProfileContainer';

const SocialLink = styled.a`
  :hover {
    transform: scale(1.1);
  }
`;

const getSocialLink = (type, value) => {
  if (type === 'facebook') {
    return `https://www.facebook.com/${value}`;
  }

  if (type === 'instagram') {
    return `https://www.instagram.com/${value}`;
  }

  if (type === 'twitter') {
    return `https://www.twitter.com/${value}`;
  }

  if (type === 'web' && value.indexOf('http') === -1) {
    return `http://${value}`;
  }

  if (type === 'web') {
    return value;
  }

  return null;
};

const Profile = ({
  asks,
  avatarUrl,
  bio,
  birthday,
  headline,
  industry,
  interests,
  location,
  name,
  neighborhood,
  occupation: { company, position },
  offers,
  social,
  starSign,
  startDate,
}) => (
  <ProfileContainer>
    {({ isEditing }) => (
      <Fragment>
        {/* Header */}
        <Box column padding={{ bottom: 29 / 16 }}>
          {/* Avatar */}
          <Box hAlignContent="center">
            <Image width={125} height={125} url={avatarUrl || theme.defaultAvatar} circle />
          </Box>

          {/* Name */}
          <Box hAlignContent="center" margin={{ top: 13 / 16 }}>
            <Text align="center" size={26 / 16} weight={800} letterSpacing={-0.54} lineHeight={30}>
              {name}
            </Text>
          </Box>

          {/* Headline */}
          <Box hAlignContent="center" margin={{ top: 13 / 16 }}>
            <Text color="solitude" align="center" lineHeight={22}>
              {headline}
            </Text>
          </Box>

          {/* Social */}
          <Box hAlignContent="center" margin={{ top: 45 / 16 }}>
            {_.map(social, (socialLink, type) => {
              if (!socialLink) {
                return false;
              }

              return (
                <Box key={type} padding={{ horizontal: 9.6 / 16 }}>
                  <SocialLink href={getSocialLink(type, socialLink)} target="_blank">
                    <SocialIcon name={type} />
                  </SocialLink>
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* Main Info */}
        <Box column grow padding={{ horizontal: 2, bottom: 2 }} color="white">
          <Section title="Bio">
            {bio && (
              <Box width={296}>
                <Text color="solitude" size={15 / 16} letterSpacing={0.2} lineHeight={20}>
                  {bio}
                </Text>
              </Box>
            )}
          </Section>
          <Section title="Current Occupation">
            {(company || position) && (
              <Box width={296}>
                <Text color="solitude" size={15 / 16} letterSpacing={0.2} lineHeight={20}>
                  {company ? `${position} at ${company}` : `${position}`}
                </Text>
              </Box>
            )}
          </Section>
          <Section title="Industry">
            {industry &&
              industry._id &&
              industry.name && (
                <Box width={296}>
                  <Text color="solitude" size={15 / 16} letterSpacing={0.2} lineHeight={20}>
                    {industry.name}
                  </Text>
                </Box>
              )}
          </Section>
          <Section title="Offers">
            {offers &&
              offers.length > 0 && (
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
              )}
          </Section>
          <Section title="Asks">
            {asks &&
              asks.length > 0 && (
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
              )}
          </Section>

          <Section title="Interested In">
            {interests &&
              interests.length > 0 && (
                <Box wrap>
                  <Transition
                    keys={interests.map(interest => interest)}
                    from={{ opacity: 0, transform: 'scale(0)' }}
                    enter={{ opacity: 1, transform: 'scale(1)' }}
                    leave={{ opacity: 0, transform: 'scale(0)' }}
                  >
                    {styles => {
                      return interests.map(interest => (
                        <Chip
                          key={interest}
                          text={interest}
                          color="concrete"
                          styles={styles}
                          readonly
                        />
                      ));
                    }}
                  </Transition>
                </Box>
              )}
          </Section>
        </Box>

        {/* Additional Info */}
        <Box column padding={{ horizontal: 2, top: 2, bottom: 58 / 16 }}>
          <List>
            <ListItem icon="location" underline>
              {neighborhood ? neighborhood : 'Button here'}
            </ListItem>
            <ListItem icon="homebase" underline>
              {location && location._id && location.name ? location.name : 'Button here'}
            </ListItem>
            {startDate && (
              <ListItem icon="anniversary" underline>
                Joined: {moment(startDate).format('MMMM YYYY')}
              </ListItem>
            )}
            <ListItem icon="birthday" underline>
              {birthday && _.get(birthday, 'day._id', null) && parseInt(birthday.day._id, 10) < 32
                ? `${_.get(birthday, 'month.name', '')} ${_.get(birthday, 'day.name', '')}`
                : 'Button here'}
            </ListItem>
            <ListItem icon="starsign" underline>
              {starSign && starSign !== '1' ? starSign : 'Button here'}
            </ListItem>
          </List>
        </Box>
      </Fragment>
    )}
  </ProfileContainer>
);

Profile.propTypes = {
  asks: PropTypes.arrayOf(PropTypes.string),
  avatarUrl: PropTypes.string,
  birthday: PropTypes.shape({
    month: PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
    }),
    day: PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
    }),
  }),
  headline: PropTypes.string,
  industry: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
  }),
  interests: PropTypes.arrayOf(PropTypes.string),
  location: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
  }),
  name: PropTypes.string,
  neighborhood: PropTypes.string,
  occupation: PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
  }),
  offers: PropTypes.arrayOf(PropTypes.string),
  social: PropTypes.shape({
    facebook: PropTypes.string,
    instagram: PropTypes.string,
    twitter: PropTypes.string,
    web: PropTypes.string,
  }),
  starSign: PropTypes.string,
  startDate: PropTypes.string,
};

Profile.defaultProps = {
  asks: [],
  avatarUrl: null,
  birthday: {
    month: null,
    day: null,
  },
  headline: null,
  industry: {
    _id: null,
    name: null,
  },
  interests: [],
  location: {
    _id: null,
    name: null,
  },
  name: null,
  neighborhood: null,
  occupation: {
    company: null,
    position: null,
  },
  offers: [],
  social: {
    facebook: null,
    instagram: null,
    twitter: null,
    web: null,
  },
  starSign: null,
  startDate: null,
};

export default Profile;
