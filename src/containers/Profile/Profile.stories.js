import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { action } from '@storybook/addon-actions';
import Profile from 'containers/Profile/Profile';

const defaultUser = {
  name: 'Rae Farine',
  headline: 'Software Engineer',
};

const userWithSocial = {
  ...defaultUser,
  social: {
    facebook: 'hello-mark',
    instagram: 'i-have-a-million-insta-stories-today',
    twitter: 'chirpchirp',
    web: 'http://the-wing.com',
  },
};

const userWithAllInfo = {
  ...userWithSocial,
  bio:
    'Jean shorts affogato pickled pork belly hexagon unicorn ramps roof party pug. Godard squid mumblecore letterpress brunch twee photo booth.',
  occupation: {
    position: 'Software Engineer',
    company: 'The Wing',
  },
  industry: {
    _id: '123',
    name: 'Computers/IT',
  },
  offers: ['Code review', 'Javascript lessons', 'Networking'],
  asks: ['Help me', 'I need', 'More cookies'],
  interests: ['Gender politics', 'Feminism', 'Vinyl'],
};

storiesOf('Profile', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => <Profile onClose={action('onClose')} />)
  .add('with name, headline', () => <Profile onClose={action('onClose')} {...defaultUser} />)
  .add('with social', () => <Profile onClose={action('onClose')} {...userWithSocial} />)
  .add('with all info', () => <Profile onClose={action('onClose')} {...userWithAllInfo} />);
