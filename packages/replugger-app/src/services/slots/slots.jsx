import React, { Component, PureComponent, isValidElement } from 'react';

import Aux from 'components/Aux/Aux';

const slots = new Map();

const createEmptySlot = (...args) => (new Set(...args));

const EmptyComponent = () => null;
const emptySlot = createEmptySlot([EmptyComponent]);

export function addToSlot(slotId, component) {
  if (typeof component !== 'function') {
    throw new TypeError('Given component must be a valid callback');
  }

  const slot = slots.has(slotId) ? slots.get(slotId) : createEmptySlot();

  console.debug(`Slots: Adding new component to slot "${slotId.toString()}"`);

  slot.add(component);

  slots.set(slotId, slot);
}

const isValidReactComponent = (componentFactory) => {
  const component = componentFactory();

  const isComponentInstance = Component.isPrototypeOf(component);
  const isPureComponentInstance = PureComponent.isPrototypeOf(component);
  const isComponentValidElement = isValidElement(component);
  const isEmptyComponent = componentFactory === EmptyComponent;

  return (
    isComponentInstance ||
    isPureComponentInstance ||
    isComponentValidElement ||
    isEmptyComponent
  );
};

export function renderSlot(slotId, childrenWrapper = null) {
  const slot = slots.has(slotId) ? slots.get(slotId) : emptySlot;

  const components = [];

  slot.forEach((componentFactory) => {
    if (!isValidReactComponent(componentFactory)) {
      throw new TypeError('Given component must be a valid React element');
    }

    let component = componentFactory();

    const useWrapper = Boolean(childrenWrapper);

    if (useWrapper && (isValidElement(childrenWrapper) || typeof childrenWrapper === 'function')) {
      component = childrenWrapper({ children: component });
    }

    components.push(component);
  });

  console.debug(`Slots: Rendering slot "${slotId.toString()}" with ${components.length} components in total`);

  return (
    <Aux>
      {components}
    </Aux>
  );
}
