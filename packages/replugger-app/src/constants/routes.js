export const HOME = Symbol('HOME_ROUTE');
export const ABOUT = Symbol('ABOUT');

const HOME_ROUTE = '/';
const ABOUT_ROUTE = '/about';

const routesMap = new Map([
  [HOME, HOME_ROUTE],
  [ABOUT, ABOUT_ROUTE]
]);

export function getRoute(route) {
  if (typeof route !== 'symbol') {
    const routes = Array.from(routesMap.entries());

    throw new TypeError(`You need to use defined name of the route. Possible routes are ${routes}`);
  }

  if (!routesMap.has(route)) {
    throw new TypeError(`Cannot find the route named "${route}"`);
  }

  return routesMap.get(route);
}
