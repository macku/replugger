import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Router from './containers/Router/Router';

import './plugins';

const renderApp = (Routes, moundId = 'root') => {
  render(
    <AppContainer>
      <Router />
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
