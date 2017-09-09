import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './containers/App/App';

import './plugins';

const renderApp = (Routes, moundId = 'root') => {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById(moundId)
  );
};

renderApp();

if (module.hot) {
  module.hot.accept(() => {
    renderApp();
  });
}
