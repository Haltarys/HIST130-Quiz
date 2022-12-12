import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={import.meta.env.BASE_URL || '/'}>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </CssBaseline>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
