import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

const renderApp = (Routes, moundId = 'root') => {
  render(
    <AppContainer>
      <h1>Hello World</h1>
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
