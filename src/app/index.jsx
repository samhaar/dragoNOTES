import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { ChakraProvider } from '@chakra-ui/react';
import theme from './config/theme.js';

import { Provider } from 'react-redux';
import store from './state/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
