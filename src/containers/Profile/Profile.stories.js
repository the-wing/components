import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { action } from '@storybook/addon-actions';
import Profile from 'containers/Profile/Profile';

const data = {
  asks: [
    { value: 'help-me', label: 'Help me' },
    { value: 'i-need', label: 'I need' },
    { value: 'more-cookies', label: 'More cookies' },
  ],
  industries: [
    { value: 'art', label: 'Art' },
    { value: 'design', label: 'Design' },
    { value: 'education', label: 'Education' },
    { value: '123', label: 'Computers/IT' },
  ],
  interests: [
    { value: 'gender-politics', label: 'Gender politics' },
    { value: 'feminism', label: 'Feminism' },
    { value: 'vinyl', label: 'Vinyl' },
  ],
  offers: [
    { value: 'code-review', label: 'Code review' },
    { value: 'js-lessons', label: 'Javascript lessons' },
    { value: 'networking', label: 'Networking' },
  ],
};

const defaultUser = {
  firstName: 'Rae',
  headline: 'Software Engineer',
  lastName: 'Farine',
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
  occupations: [
    {
      position: { label: 'Software Engineer', value: 'software-engineer' },
      company: { label: 'The Wing', value: 'the-wing' },
    },
  ],
  industry: {
    value: '123',
    label: 'Computers/IT',
  },
  offers: [
    { value: 'code-review', label: 'Code review' },
    { value: 'js-lessons', label: 'Javascript lessons' },
    { value: 'networking', label: 'Networking' },
  ],
  asks: [
    { value: 'help-me', label: 'Help me' },
    { value: 'i-need', label: 'I need' },
    { value: 'more-cookies', label: 'More cookies' },
  ],
  interests: [
    { value: 'gender-politics', label: 'Gender politics' },
    { value: 'feminism', label: 'Feminism' },
    { value: 'vinyl', label: 'Vinyl' },
  ],
  neighborhood: { label: 'Greenpoint', value: 'greenpoint' },
  location: {
    _id: '123',
    name: 'All Access',
  },
  startDate: '2018-09-04T22:44:30.652Z',
  birthday: {
    month: { value: '09', label: 'September' },
    day: { value: '22', label: '22' },
  },
  starSign: {
    value: '9',
    label: 'Libra',
  },
};

storiesOf('Profile', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => (
    <Profile data={data} onSubmit={action('onSubmit')} onClose={action('onClose')} />
  ))
  .add('with name, headline', () => (
    <Profile
      data={data}
      onClose={action('onClose')}
      onSubmit={action('onSubmit')}
      initialValues={defaultUser}
    />
  ))
  .add('with social', () => (
    <Profile
      data={data}
      onClose={action('onClose')}
      onSubmit={action('onSubmit')}
      initialValues={userWithSocial}
    />
  ))
  .add('with all info', () => (
    <Profile
      data={data}
      onClose={action('onClose')}
      onSubmit={action('onSubmit')}
      initialValues={userWithAllInfo}
    />
  ))
  .add('readonly default', () => (
    <Profile data={data} onClose={action('onClose')} onSubmit={action('onSubmit')} readonly />
  ))
  .add('readonly with all info', () => (
    <Profile
      data={data}
      onClose={action('onClose')}
      onSubmit={action('onSubmit')}
      initialValues={userWithAllInfo}
      readonly
    />
  ));
