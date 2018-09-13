import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { action } from '@storybook/addon-actions';
import Profile from 'containers/Profile/Profile';

const industryList = [
  { value: 'art', label: 'Art' },
  { value: 'design', label: 'Design' },
  { value: 'education', label: 'Education' },
  { value: '123', label: 'Computers/IT' },
];

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
      position: 'Software Engineer',
      company: 'The Wing',
    },
    {
      position: 'Contractor',
      company: 'Self Employed',
    },
  ],
  industry: {
    value: '123',
    label: 'Computers/IT',
  },
  offers: ['Code review', 'Javascript lessons', 'Networking'],
  asks: ['Help me', 'I need', 'More cookies'],
  interests: ['Gender politics', 'Feminism', 'Vinyl'],
  neighborhood: 'Greenpoint',
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
    <Profile
      industryList={industryList}
      onSubmit={action('onSubmit')}
      onClose={action('onClose')}
    />
  ))
  .add('with name, headline', () => (
    <Profile
      industryList={industryList}
      onClose={action('onClose')}
      onSubmit={action('onSubmit')}
      initialValues={defaultUser}
    />
  ))
  .add('with social', () => (
    <Profile
      industryList={industryList}
      onClose={action('onClose')}
      onSubmit={action('onSubmit')}
      initialValues={userWithSocial}
    />
  ))
  .add('with all info', () => (
    <Profile
      industryList={industryList}
      onClose={action('onClose')}
      onSubmit={action('onSubmit')}
      initialValues={userWithAllInfo}
    />
  ));
