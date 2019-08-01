// Vendor
import { ThemeProvider } from 'styled-components';
import React from 'react'
import ReactDOM from 'react-dom'

// Internal
import App from './App';

const rootElement = document.getElementById('root')

const theme = {
  main: '#82C0CC',
  darkerMain: '#489FB5',
  darkestMain: '#16697A',
  light: '#EDE7E3',
  accent: '#FFA62B',
  lightAccent: '#FFD191',
  error: '#F15946',
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  rootElement
);
