import React from 'react';
import { storiesOf } from '@storybook/react';
import Section from 'ui/Section/Section';

storiesOf('UI/Section', module).add('default', () => (
  <Section title="Section Title">Hello there</Section>
));
