import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import Member from 'containers/Member/Member';

const defaultProps = {
  asksAndOfferings: [
    {
      title: 'Offering',
      values: ['Waffles', 'Love', 'Friendship', 'Hard Work'],
    },
    { title: 'Asking', values: ['Also Waffles', 'Joe Biden', 'Ann', 'Fairness', 'More parks'] },
  ],
  industry: 'Government',
  location: 'All Access, Soho',
  name: 'Leslie Knope',
  position: 'Deputy Director of the Pawnee City Department of Parks and Recreation',
};

storiesOf('Member', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => <Member {...defaultProps} />);
