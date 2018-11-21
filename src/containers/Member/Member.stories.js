import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import styled from 'styled-components';
import Member from 'containers/Member/Member';
import { queries } from 'breakpoints';

const Page = styled.div`
  background: ${props => props.theme.colors.linen.main};
  height: 100vh;
  padding: 2em 0;
`;

const Content = styled.div`
  margin: 0 auto;

  @media ${queries.tablet} {
    width: 710px;
  }

  @media ${queries.desktop} {
    width: 791px;
  }
`;

const defaultProps = {
  industry: 'Government',
  location: 'All Access, Soho',
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
  ))
  .add('with asks and offerings', () => (
    <Page>
      <Content>
        <Member
          {...defaultProps}
          asksAndOfferings={[
            {
              title: 'Offering',
              values: ['Waffles', 'Love', 'Friendship', 'Hard Work'],
            },
            {
              title: 'Asking',
              values: ['Also Waffles', 'Joe Biden', 'Ann', 'Fairness', 'More parks'],
            },
          ]}
        />
      </Content>
    </Page>
  ))
  .add('with message', () => (
    <Page>
      <Content>
        <Member
          {...defaultProps}
          message="You and Ron Swanson attended the same event yesterday. You are also both interested in waffles."
        />
      </Content>
    </Page>
  ))
  .add('with asks/offerings and message', () => (
    <Page>
      <Content>
        <Member
          {...defaultProps}
          asksAndOfferings={[
            {
              title: 'Offering',
              values: ['Waffles', 'Love', 'Friendship', 'Hard Work'],
            },
            {
              title: 'Asking',
              values: ['Also Waffles', 'Joe Biden', 'Ann', 'Fairness', 'More parks'],
            },
          ]}
          message="You and Ron Swanson attended the same event yesterday. You are also both interested in waffles."
        />
      </Content>
    </Page>
  ));
