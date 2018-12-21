import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from 'ui/Button/Button';
import Collapsible from 'ui/Collapsible/Collapsible';

storiesOf('UI/Collapsible', module)
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
      {({ isOpen, toggle }) => {
        if (!isOpen) return false;

        return (
          <div>
            You hid the original toggle button. <button onClick={toggle}>So click me.</button>
          </div>
        );
      }}
    </Collapsible>
  ));
