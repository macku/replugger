import Aux from './components/Aux/Aux';
import route from './decorators/route-decorator';
import { slot, renderTo } from './decorators/slot-decorator';
import { getRoute, addRoute } from './services/routes/routes';
import { addComponentRoute, getRoutesComponents } from './services/router/router';
import { addToSlot, renderSlot } from './services/slots/slots';

export {
  Aux,
  route,
  slot,
  renderTo,
  getRoute,
  addRoute,
  addComponentRoute,
  getRoutesComponents,
  addToSlot,
  renderSlot
};
