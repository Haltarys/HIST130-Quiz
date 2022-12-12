import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClientProvider } from 'react-query';
import StoreProvider from './store';
import theme from './theme';
import { baseURL, queryClient } from './api';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={baseURL}>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <StoreProvider>
              <App />
            </StoreProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </CssBaseline>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
