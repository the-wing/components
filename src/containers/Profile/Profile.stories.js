import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { action } from '@storybook/addon-actions';
import { State, Store } from '@sambego/storybook-state';
import Profile from 'containers/Profile/Profile';
import theme from 'theme';
import {
  data,
  defaultProps,
  defaultUser,
  userWithAllInfo,
  userWithErrors,
  userWithSocial,
} from './Profile.storyData';

const store = new Store({
  loading: true,
});

storiesOf('Profile', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => (
    <Profile
      {...defaultProps}
      data={data}
      onSubmit={action('onSubmit')}
      initialValues={defaultUser}
      onClose={action('onClose')}
    />
  ))
  .add('loading', () => (
    <Profile
      {...defaultProps}
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
            {...defaultProps}
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
      {...defaultProps}
      data={data}
      onClose={action('onClose')}
      onSubmit={action('onSubmit')}
      initialValues={defaultUser}
    />
  ))
  .add('with social', () => (
    <Profile
      {...defaultProps}
      data={data}
      onClose={action('onClose')}
      onSubmit={action('onSubmit')}
      initialValues={userWithSocial}
    />
  ))
  .add('with all info', () => (
    <Profile
      {...defaultProps}
      data={data}
      onClose={action('onClose')}
      onSubmit={action('onSubmit')}
      initialValues={userWithAllInfo}
    />
  ))
  .add('with errors', () => (
    <Profile
      {...defaultProps}
      data={data}
      onClose={action('onClose')}
      onSubmit={action('onSubmit')}
      initialValues={userWithErrors}
    />
  ))
  .add('readonly default', () => (
    <Profile
      {...defaultProps}
      data={data}
      onClose={action('onClose')}
      onSubmit={action('onSubmit')}
      readonly
    />
  ))
  .add('readonly with name, headline', () => (
    <Profile
      {...defaultProps}
      data={data}
      onClose={action('onClose')}
      onSubmit={action('onSubmit')}
      initialValues={defaultUser}
      readonly
    />
  ))
  .add('readonly with social', () => (
    <Profile
      {...defaultProps}
      data={data}
      onClose={action('onClose')}
      onSubmit={action('onSubmit')}
      initialValues={userWithSocial}
      readonly
    />
  ))
  .add('readonly with all info', () => (
    <Profile
      {...defaultProps}
      data={data}
      onClose={action('onClose')}
      onSubmit={action('onSubmit')}
      initialValues={userWithAllInfo}
      readonly
    />
  ));
