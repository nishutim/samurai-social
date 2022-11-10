import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Provider } from 'react-redux';
import store from './store';
import GlobalStyle from './GlobalStyle';
import App from './components/App/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </ThemeProvider>
  </HashRouter>
);