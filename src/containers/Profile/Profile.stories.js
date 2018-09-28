import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { action } from '@storybook/addon-actions';
import { State, Store } from '@sambego/storybook-state';
import Profile from 'containers/Profile/Profile';
import theme from 'theme';

const store = new Store({
  loading: true,
});

const data = {
  asks: [
    { value: 'help-me', label: 'Help me' },
    { value: 'i-need', label: 'I need' },
    { value: 'more-cookies', label: 'More cookies' },
  ],
  companies: [
    { value: 'the-hangar-interactive', label: 'The Hangar Interactive' },
    { value: 'prolific-interactive', label: 'Prolific Interactive' },
    { value: 'the-wing', label: 'The Wing' },
    { value: 'facebook', label: 'Facebook Inc.' },
    { value: 'amazon', label: 'Amazon' },
    { value: 'uber', label: 'Uber' },
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
  neighborhoods: [
    { value: 'williamsburg', label: 'Williamsburg' },
    { value: 'park-slope', label: 'Park Slope' },
    { value: 'dumbo', label: 'DUMBO' },
    { value: 'cobble-hill', label: 'Cobble Hill' },
    { value: 'flatbush', label: 'Flatbush' },
    { value: 'crown-heights', label: 'Crown Heights' },
    { value: 'bay-ridge', label: 'Bay Ridge' },
    { value: 'downtown-brooklyn', label: 'Downtown Brooklyn' },
  ],
  positions: [
    { value: 'front-end-developer', label: 'Front End Developer' },
    { value: 'back-end-developer', label: 'Back End Developer' },
    { value: 'designer', label: 'Designer' },
    { value: 'photographer', label: 'Photographer' },
    { value: 'musician', label: 'Musician' },
    { value: 'deejay', label: 'DeeJay' },
    { value: 'producer', label: 'Producer' },
    { value: 'uber-driver', label: 'Uber Driver' },
  ],
};

const defaultUser = {
  avatarUrl: theme.defaultAvatar,
  firstName: 'Rae',
  headline: 'Software Engineer',
  lastName: 'Farine',
  social: {
    facebook: null,
    instagram: null,
    twitter: null,
    web: null,
  },
  bio: null,
  contactEmail: null,
  occupations: [],
  industry: null,
  offers: [],
  asks: [],
  interests: [],
  neighborhood: null,
  location: null,
  startDate: '2018-09-04T22:44:30.652Z',
  birthday: null,
  starSign: null,
};

const userWithSocial = {
  ...defaultUser,
  social: {
    facebook: 'hello-mark',
    instagram: 'iHaveAMillionInstaStories',
    twitter: 'chirpchirp',
    web: 'http://the-wing.com',
  },
};

const userWithAllInfo = {
  ...userWithSocial,
  bio:
    'Jean shorts affogato pickled pork belly hexagon unicorn ramps roof party pug. Godard squid mumblecore letterpress brunch twee photo booth.',
  contactEmail: 'emailMeSomething@email.com',
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

const userWithErrors = {
  avatarUrl: theme.defaultAvatar,
  firstName: null,
  lastName: null,
  headline: null,
  social: {
    facebook: 'https://facebook.com/ishouldntbeaurl',
    instagram: '@not-valid',
    twitter: '@so-not-valid',
    web: '123whatisthis',
  },
  bio:
    "Vexillologist pok pok wolf kickstarter, swag single-origin coffee direct trade pabst la croix butcher sustainable asymmetrical iceland fam blue bottle. Before they sold out leggings cray iceland chillwave gochujang fanny pack blue bottle, skateboard helvetica tattooed godard. Biodiesel pabst before they sold out, four loko echo park gluten-free pug crucifix kitsch raw denim quinoa aesthetic sustainable tofu kickstarter. Unicorn flexitarian leggings irony, tbh dreamcatcher sustainable. Pinterest prism migas coloring book, keytar squid godard vegan succulents fam selvage gluten-free. Butcher distillery direct trade, next level selfies mustache four dollar toast 90's farm-to-table. Pok pok sriracha chillwave, semiotics twee church-key tacos blue bottle cardigan kitsch post-ironic offal.",
  contactEmail: 'thisisnotanemail',
  occupations: [
    {
      position: null,
      company: null,
    },
  ],
  industry: null,
  offers: [
    {
      value: 'wayyyyyyyyyy-too-loooooong',
      label:
        'I am way too long to be an offer. Like what are you doing? This is way too much text.',
    },
  ],
  asks: [
    {
      value: 'wayyyyyyyyyy-too-loooooong',
      label: 'I am way too long to be an ask. Like what are you doing? This is way too much text.',
    },
  ],
  interests: [
    {
      value: 'wayyyyyyyyyy-too-loooooong',
      label:
        'I am way too long to be an interest. Like what are you doing? This is way too much text.',
    },
  ],
  neighborhood: null,
  location: {
    _id: '456',
    name: 'Soho',
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
      data={data}
      onSubmit={action('onSubmit')}
      initialValues={defaultUser}
      onClose={action('onClose')}
    />
  ))
  .add('loading', () => (
    <Profile
      data={data}
      onSubmit={action('onSubmit')}
      initialValues={defaultUser}
      onClose={action('onClose')}
      loading
    />
  ))
  .add('from loading to loaded', () => (
    <State store={store}>
      {state => {
        setTimeout(() => store.set({ loading: false }), 5000);

        return (
          <Profile
            data={data}
            onSubmit={action('onSubmit')}
            initialValues={defaultUser}
            onClose={action('onClose')}
            loading={state.loading}
          />
        );
      }}
    </State>
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
  .add('with errors', () => (
    <Profile
      data={data}
      onClose={action('onClose')}
      onSubmit={action('onSubmit')}
      initialValues={userWithErrors}
    />
  ))
  .add('readonly default', () => (
    <Profile data={data} onClose={action('onClose')} onSubmit={action('onSubmit')} readonly />
  ))
  .add('readonly with name, headline', () => (
    <Profile
      data={data}
      onClose={action('onClose')}
      onSubmit={action('onSubmit')}
      initialValues={defaultUser}
      readonly
    />
  ))
  .add('readonly with social', () => (
    <Profile
      data={data}
      onClose={action('onClose')}
      onSubmit={action('onSubmit')}
      initialValues={userWithSocial}
      readonly
    />
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
