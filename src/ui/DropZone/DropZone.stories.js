import React from 'react';
import { storiesOf } from '@storybook/react';
import DropZone from 'ui/DropZone/DropZone';

storiesOf('DropZone', module)
  .add('default', () => <DropZone />)
  .add('children', () => <DropZone>Hello there. Please upload something!</DropZone>)
  .add('image exceeds maxSize', () => (
    <DropZone maxSize={2}>
      Hello there. Please upload an image bigger than 2 bytes to see the error!
    </DropZone>
  ))
  .add('image exceeds maxSize and has minWidth set', () => (
    <DropZone maxSize={2} minWidth={20}>
      Hello there. Please upload an image bigger than 2 bytes (and larger than 20px wide) to see the
      error! (Min width error should not be hit, because file will be rejected.)
    </DropZone>
  ))
  .add('image is smaller than minWidth', () => (
    <DropZone minWidth={500}>
      Hello there. Please upload an image that is less than 500px wide.
    </DropZone>
  ))
  .add('image is larger than maxWidth', () => (
    <DropZone maxWidth={50}>
      Hello there. Please upload an image that is larger than 50px wide.
    </DropZone>
  ))
  .add('image is smaller than minWidth or larger than maxWidth', () => (
    <DropZone minWidth={500} maxWidth={700}>
      Hello there. Please upload an image that is larger than 500px wide or larger than 700px wide.
    </DropZone>
  ));
