import React, { isValidElement } from 'react';
import Aux from 'components/Aux/Aux';

const slots = new Map();

const EmptyComponent = () => null;
const emptySlot = new Set([EmptyComponent]);

export function addToSlot(slotName, component) {
  if (!isValidElement(component)) {
    throw new TypeError('Given component must be a valid React element');
  }

  const slot = slots.has(slotName) ? slots.get(slotName) : new Set();

  slot.add(component);

  slots.set(slotName, slot);
}

export function renderSlot(slotName, childrenWrapper = null) {
  const slot = slots.has(slotName) ? slots.get(slotName) : emptySlot;

  const components = [];

  slot.forEach((rawComponent) => {
    let component = rawComponent;
    const useWrapper = Boolean(childrenWrapper);

    if (useWrapper && (isValidElement(childrenWrapper) || typeof childrenWrapper === 'function')) {
      component = childrenWrapper({ children: rawComponent });
    }

    components.push(component);
  });

  return (
    <Aux>
      {components}
    </Aux>
  );
}
