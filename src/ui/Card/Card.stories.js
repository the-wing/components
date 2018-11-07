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
  .add('with content', () => <Card>A card with content.</Card>)
  .add('with scalloped edges', () => (
    <Card scalloped>
      A card with scalloped edges. And it has a lot of text. There is more text. Here is more. Lots
      of text.
    </Card>
  ))
  .add('secondary', () => (
    <Card scalloped secondary>
      A secondary card with scalloped edges. And it has a lot of text. There is more text. Here is
      more. Lots of text.
    </Card>
  ))
  .add('with scalloped edges on top of background color', () => (
    <Page>
      <Card scalloped>
        A card with scalloped edges. And it has a lot of text. There is more text. Here is more.
        Lots of text.
      </Card>
    </Page>
  ));
