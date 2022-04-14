import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from './store/store';
import theme from './theme';
import { baseURL, queryClient } from './api';
import App from './App';
import './styles/globals.css';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={baseURL}>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <Provider store={store}>
              <App />
            </Provider>
          </QueryClientProvider>
        </ThemeProvider>
      </CssBaseline>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
