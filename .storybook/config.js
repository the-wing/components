import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import ReactBreakpoints from 'react-breakpoints';
import theme from '../src/theme';
import breakpoints from '../src/breakpoints';
import '../src/style/normalize.scss';
import '../src/style/fonts.scss';

const req = require.context('../src/', true, /stories\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(story => (
  <ReactBreakpoints breakpoints={breakpoints}>
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  </ReactBreakpoints>
));

configure(loadStories, module);
