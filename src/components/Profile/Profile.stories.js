import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import Profile from 'components/Profile/Profile';

storiesOf('Profile', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => <Profile />)
  .add('with name and headline', () => <Profile headline="Software Engineer" name="Rae Farine" />);
