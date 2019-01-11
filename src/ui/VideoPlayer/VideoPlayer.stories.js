import React from 'react';
import { storiesOf } from '@storybook/react';
import VideoPlayer from 'ui/VideoPlayer/VideoPlayer';

storiesOf('UI/VideoPlayer', module)
  .add('default', () => <VideoPlayer />)
  .add('autoplay', () => <VideoPlayer autoPlay />)
  .add('muted', () => <VideoPlayer muted />);
