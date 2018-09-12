import React, { Fragment } from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { FormField, TypeAhead } from 'ui/Forms';

const options = ['Cullen', 'Lina', 'Rae', 'Jamie'];

storiesOf('TypeAhead', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => (
    <FormField>
      <TypeAhead options={options} placeholder="Placeholder Text" />
    </FormField>
  ))
  .add('multiple TypeAheads', () => (
    <Fragment>
      <FormField>
        <TypeAhead options={options} placeholder="Placeholder Text" />
      </FormField>
      <FormField>
        <TypeAhead options={options} placeholder="Placeholder Text" />
      </FormField>
    </Fragment>
  ));
