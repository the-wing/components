import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import styled from 'styled-components';
import Member from 'containers/Member/Member';
import { data } from './Member.storyData';

const Page = styled.div`
  background: ${props => props.theme.colors.linen.main};
  height: 100vh;
  padding: 2em 0;
`;

const Content = styled.div`
  margin: 0 auto;

  @media ${props => props.theme.queries.tablet} {
    width: 710px;
  }

  @media ${props => props.theme.queries.desktop} {
    width: 791px;
  }
`;

storiesOf('Member', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => <Member {...data.leslie} />)
  .add('in container with set width', () => (
    <Page>
      <Content>
        <Member {...data.leslie} />
      </Content>
    </Page>
  ))
  .add('with asks and offerings', () => (
    <Page>
      <Content>
        <Member {...data.leslieWithAsksAndOfferings} />
      </Content>
    </Page>
  ))
  .add('with message', () => (
    <Page>
      <Content>
        <Member {...data.leslieWithMessage} />
      </Content>
    </Page>
  ))
  .add('with asks/offerings and message', () => (
    <Page>
      <Content>
        <Member {...data.leslieWithAsksAndOfferingsAndMessage} />
      </Content>
    </Page>
  ))
  .add('with asks/offerings that do not exceed 3 (no "+ x more" text)', () => (
    <Page>
      <Content>
        <Member {...data.ronWithAsksAndOfferingsAndMessage} />
      </Content>
    </Page>
  ));
