import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { FormField, Label, TextArea } from 'ui/Forms';

storiesOf('TextArea', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => (
    <FormField>
      <Label for="id1" text="Label 1" />
      <TextArea id="id1" />
    </FormField>
  ))
  .add('error', () => (
    <FormField>
      <Label for="id1" text="Label 1" />
      <TextArea id="id1" error />
    </FormField>
  ))
  .add('with maxLength', () => (
    <FormField>
      <Label for="id1" text="Label 1" />
      <TextArea id="id1" maxLength={300} />
    </FormField>
  ))
  .add('with currentLength', () => (
    <FormField>
      <Label for="id1" text="Label 1" />
      <TextArea id="id1" currentLength={11} maxLength={300} value="Hello there" />
    </FormField>
  ));
