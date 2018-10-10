import React, { Fragment } from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { action } from '@storybook/addon-actions';
import { State, Store } from '@sambego/storybook-state';
import Drawer from 'ui/Drawer/Drawer';

const store = new Store({
  isOpen: false,
});

storiesOf('Drawer', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('isOpen', () => (
    <Drawer isOpen>
      <div>I am a drawer.</div>
    </Drawer>
  ))
  .add('toggle open', () => (
    <State store={store}>
      {state => {
        return (
          <Fragment>
            <button onClick={() => store.set({ isOpen: !store.get('isOpen') })}>Toggle</button>
            <Drawer backdropBgColor="#FBF1ED" isOpen={state.isOpen}>
              <div>I am a drawer.</div>
            </Drawer>
          </Fragment>
        );
      }}
    </State>
  ))
  .add('backdropBgColor', () => (
    <Drawer backdropBgColor="#FBF1ED" isOpen>
      <div>I am a drawer.</div>
    </Drawer>
  ))
  .add('left', () => (
    <Drawer backdropBgColor="#FBF1ED" left isOpen>
      <div>I am a drawer.</div>
    </Drawer>
  ));
