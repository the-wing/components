import React from 'react';
import PropTypes from 'prop-types';
import ReactPlaceholder from 'react-placeholder';
import { Transition } from 'react-spring';

import Box from 'ui/Box/Box';
import Avatar from './Avatar';
import Headline from './Headline';
import Name from './Name';
import Social from './Social';

const Container = ({ children, style }) => (
  <Box column padding={{ bottom: 29 / 16 }} style={style}>
    {children}
  </Box>
);

const Head = ({ avatarUrl, firstName, headline, lastName, loading, social }) => (
  <ReactPlaceholder
    ready={!loading}
    customPlaceholder={
      <Container>
        <Avatar loading />
        <Name loading />
        <Headline loading />
        <Social loading />
      </Container>
    }
  >
    <Transition native from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0 }}>
      {() => props => (
        <Container style={props}>
          <Avatar url={avatarUrl} title={`${firstName} ${lastName}`} />
          <Name first={firstName} last={lastName} />
          {headline && <Headline text={headline} />}
          <Social links={social} />
        </Container>
      )}
    </Transition>
  </ReactPlaceholder>
);

Head.propTypes = {
  avatarUrl: PropTypes.string,
  firstName: PropTypes.string,
  headline: PropTypes.string,
  lastName: PropTypes.string,
  loading: PropTypes.bool,
  social: PropTypes.shape({
    facebook: PropTypes.string,
    instagram: PropTypes.string,
    twitter: PropTypes.string,
    web: PropTypes.string,
  }),
};

Head.defaultProps = {
  avatarUrl: null,
  firstName: null,
  headline: null,
  lastName: null,
  loading: false,
  social: {
    facebook: null,
    instagram: null,
    twitter: null,
    web: null,
  },
};

export default Head;
