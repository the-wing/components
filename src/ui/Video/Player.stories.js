import React from 'react';
import { storiesOf } from '@storybook/react';
import Player from 'ui/Video/Player';

storiesOf('UI/Video', module)
  .add('default', () => <Player />)
  .add('autoplay', () => <Player autoPlay />)
  .add('muted', () => <Player muted />);
