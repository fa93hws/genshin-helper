import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core/styles';
import '@fontsource/roboto';

import { Page } from './page';

const theme = responsiveFontSizes(createTheme());

const Component = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Page />
  </ThemeProvider>
);

ReactDOM.render(<Component />, document.getElementById('root'));
