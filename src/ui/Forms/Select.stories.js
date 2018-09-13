import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { action } from '@storybook/addon-actions';
import { FormField, Label, Select, TextArea } from 'ui/Forms';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

storiesOf('Select', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => <Select options={options} />)
  .add('with placeholder', () => <Select options={options} placeholder="Select a flavor" />)
  .add('with custom onChange', () => (
    <Select onChange={action('custom onChange')} options={options} />
  ))
  .add('with defaultValue', () => <Select options={options} defaultValue="Chocolate" />);
