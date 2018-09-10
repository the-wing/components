import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import SocialIcon from 'ui/SocialIcon/SocialIcon';

storiesOf('SocialIcon', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('facebook', () => <SocialIcon name="facebook" />);
