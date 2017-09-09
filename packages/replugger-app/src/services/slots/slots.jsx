import React from 'react';

const slots = new Map();

const EmptyComponent = () => null;
const empySlot = new Set([EmptyComponent]);

const AuxComponent = ({ children }) => children;

export function addToSlot(slotName, component) {
  const slot = slots.has(slotName) ? slots.get(slotName) : new Set();

  slot.add(component);

  slots.set(slotName, slot);
}

export function renderSlot(slotName) {
  const slot = slots.has(slotName) ? slots.get(slotName) : empySlot;

  const components = [];

  slot.forEach(component => components.push(component));

  return (
    <AuxComponent>
      {components}
    </AuxComponent>
  );
}
