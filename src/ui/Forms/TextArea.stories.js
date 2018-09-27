import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { ErrorMessage, FormField, Label, TextArea } from 'ui/Forms';

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
      <Label for="id1" text="Label 1" error />
      <TextArea id="id1" error="I am an error" />
    </FormField>
  ))
  .add('with maxLength', () => (
    <FormField>
      <Label for="id1" text="Label 1" />
      <TextArea id="id1" maxLength={300} />
    </FormField>
  ))
  .add('with maxLength & currentLength', () => (
    <FormField>
      <Label for="id1" text="Label 1" />
      <TextArea id="id1" currentLength={11} maxLength={300} value="Hello there" />
    </FormField>
  ))
  .add('with maxLength & currentLength and error', () => (
    <FormField>
      <Label for="id1" text="Label 1" />
      <TextArea id="id1" currentLength={11} maxLength={300} value="Hello there" error="Oh noooo!" />
    </FormField>
  ));
