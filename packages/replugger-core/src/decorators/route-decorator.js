import { addComponentRoute } from '../services/router/router';
import { getRoute } from '../services/routes/routes';

export default function route(routeId, exact = false) {
  return (component) => {
    const routeUrl = getRoute(routeId);

    addComponentRoute(routeId, routeUrl, component, exact);
  };
}
