//@flow

import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './themes/default.js';

import './IconLib';

type Props = {}

class App extends Component<Props> {
  render() {
    return (
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <>
            Hello App
          </>
        </ThemeProvider>
      </React.StrictMode>
    );
  }
}

export default App;
