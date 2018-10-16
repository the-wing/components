import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import '../src/style/normalize.css';
import '../src/style/fonts.scss';

const req = require.context('../src/', true, /stories\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

configure(loadStories, module);
