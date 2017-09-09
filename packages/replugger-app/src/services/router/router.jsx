import React from 'react';
import { Route } from 'react-router-dom';

const routes = new Map();

export function addRoute(route, path, component, exact = false) {
  // TODO: Should we check path instead?
  if (routes.has(route)) {
    throw new TypeError(`Given route "${route}" should be unique but it's already used.`);
  }

  routes.set(route, { route, path, exact, component });
}

export function getRoutesComponents() {
  const components = [];

  routes.forEach(({ route, path, exact, component }) => {
    components.push(
      <Route
        key={route.toString()}
        path={path}
        exact={exact}
        component={component}
      />
    );
  });

  return components;
}
