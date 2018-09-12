import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { FormField, Input, Label } from 'ui/Forms';

storiesOf('Input', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => (
    <FormField>
      <Label for="id1" text="Label 1" />
      <Input id="id1" />
    </FormField>
  ))
  .add('with placeholder', () => (
    <FormField>
      <Label for="id2" text="Label 2" />
      <Input id="id2" placeholder="Gender is an illusion, don't you agree?" />
    </FormField>
  ))
  .add('error', () => (
    <FormField>
      <Label for="id2" text="Label 3" />
      <Input error />
    </FormField>
  ));
