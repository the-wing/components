import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import styled from 'styled-components';
import Member from 'containers/Member/Member';

const Page = styled.div`
  background: ${props => props.theme.colors.linen.main};
  height: 100vh;
  padding: 2em 0;
`;

const Content = styled.div`
  margin: 0 auto;
  width: 791px;
`;

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
  message:
    'You and Ron Swanson attended the same event yesterday. You are also both interested in waffles.',
  name: 'Leslie Knope',
  position: 'Deputy Director of the Pawnee City Department of Parks and Recreation',
};

storiesOf('Member', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => <Member {...defaultProps} />)
  .add('in container with set width', () => (
    <Page>
      <Content>
        <Member {...defaultProps} />
      </Content>
    </Page>
  ));
