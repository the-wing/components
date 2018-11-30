import React from 'react';
import { storiesOf } from '@storybook/react';
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
      initialValues={defaultUser}
      onClose={action('onClose')}
      onSubmit={action('onSubmit')}
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
