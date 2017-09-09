import React from 'react';

const routes = new Map();

// TODO: Use object attribute
export function addComponentRoute(routeId, uri, component, exact = false) {
  // TODO: Should we check uri instead of the routeId?
  if (routes.has(routeId)) {
    throw new TypeError(`Given route "${routeId}" should be unique but it's already used.`);
  }

  routes.set(routeId, { uri, component, exact });
}

export function getRoutesComponents(Component) {
  const components = [];

  routes.forEach(({ uri, component, exact }, routeId) => {
    components.push(
      <Component
        key={routeId.toString()}
        path={uri}
        component={component}
        exact={exact}
      />
    );
  });

  return components;
}
