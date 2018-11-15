import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import styled from 'styled-components';
import Card from 'ui/Card/Card';

const Page = styled.div`
  background: ${props => props.theme.colors.linen.main};
  height: 100vh;
  padding: 2em;
`;

storiesOf('Card', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('with content', () => (
    <Page>
      <Card>A card with content.</Card>
    </Page>
  ))
  .add('with corners', () => (
    <Page>
      <Card corners>
        A card with corners. And it has a lot of text. There is more text. Here is more. Lots of
        text.
      </Card>
    </Page>
  ))
  .add('secondary', () => (
    <Page>
      <Card corners secondary>
        A secondary card with corners. And it has a lot of text. There is more text. Here is more.
        Lots of text.
      </Card>
    </Page>
  ))
  .add('with shadow', () => (
    <Page>
      <Card corners shadow>
        A card with corners and shadow. And it has a lot of text. There is more text. Here is more.
        Lots of text.
      </Card>
    </Page>
  ));
