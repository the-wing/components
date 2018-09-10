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

storiesOf('Profile', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => <Profile onClose={action('onClose')} />)
  .add('with name, headline', () => <Profile onClose={action('onClose')} user={defaultUser} />)
  .add('with social', () => <Profile onClose={action('onClose')} user={userWithSocial} />);
