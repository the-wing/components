import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { action } from '@storybook/addon-actions';
import Drawer from 'ui/Drawer/Drawer';

storiesOf('Drawer', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('isOpen', () => (
    <Drawer isOpen>
      {() => <div>I am a drawer.</div>}
    </Drawer>
  ))
  .add('backdropBgColor', () => (
    <Drawer backdropBgColor="#FBF1ED" isOpen>
      {() => <div>I am a drawer.</div>}
    </Drawer>
  ))
  .add('left', () => (
    <Drawer backdropBgColor="#FBF1ED" left isOpen>
      {() => <div>I am a drawer.</div>}
    </Drawer>
  ))
  .add('custom onClose', () => (
    <Drawer backdropBgColor="#FBF1ED" isOpen onClose={() => alert('I am a custom close event.')}>
      {({ onClose }) => <div>
        I am a drawer. <br />
        <button onClick={onClose}>Close</button>
      </div>}
    </Drawer>
  ))