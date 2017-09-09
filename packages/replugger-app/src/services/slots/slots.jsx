import React, { isValidElement } from 'react';

import Aux from 'components/Aux/Aux';

const slots = new Map();

const createEmptySlot = (...args) => (new Set(...args));

const EmptyComponent = () => null;
const emptySlot = createEmptySlot([EmptyComponent]);

export function addToSlot(slotName, component) {
  if (typeof component !== 'function') {
    throw new TypeError('Given component must be a valid callback');
  }

  const slot = slots.has(slotName) ? slots.get(slotName) : createEmptySlot();

  slot.add(component);

  slots.set(slotName, slot);
}

export function renderSlot(slotName, childrenWrapper = null) {
  const slot = slots.has(slotName) ? slots.get(slotName) : emptySlot;

  const components = [];

  slot.forEach((componentFactory) => {
    let component = componentFactory();

    if (!isValidElement(component)) {
      throw new TypeError('Given component must be a valid React element');
    }

    const useWrapper = Boolean(childrenWrapper);

    if (useWrapper && (isValidElement(childrenWrapper) || typeof childrenWrapper === 'function')) {
      component = childrenWrapper({ children: component });
    }

    components.push(component);
  });

  return (
    <Aux>
      {components}
    </Aux>
  );
}
