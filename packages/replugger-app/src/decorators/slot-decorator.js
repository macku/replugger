import { addToSlot } from 'services/slots/slots';

export function slot() {}

export function renderTo(slotId) {
  return (target, propertyKey, descriptor) => {
    addToSlot(slotId, descriptor.value);
  };
}
