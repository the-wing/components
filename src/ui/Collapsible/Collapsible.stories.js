import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { action } from '@storybook/addon-actions';
import Button from 'ui/Button/Button';
import Collapsible from 'ui/Collapsible/Collapsible';

storiesOf('Collapsible', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => (
    <Collapsible
      onToggle={action('custom onToggle')}
      trigger={({ toggle }) => <Button onClick={toggle}>Toggle the content</Button>}
    >
      {({ isOpen }) => {
        if (!isOpen) return false;

        return <div>I am hidden content sometimes.</div>;
      }}
    </Collapsible>
  ))
  .add('hidden title on toggle open', () => (
    <Collapsible
      onToggle={action('custom onToggle')}
      trigger={({ isOpen, toggle }) => {
        if (isOpen) return false;

        return <Button onClick={toggle}>Toggle the content</Button>;
      }}
    >
      {({ isOpen }) => {
        if (!isOpen) return false;

        return <div>You can never un-toggle me. I will forever haunt you.</div>;
      }}
    </Collapsible>
  ));
