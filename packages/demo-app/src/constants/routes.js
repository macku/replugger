import { addRoute } from 'replugger';

export const HOME_PAGE = Symbol('HOME_ROUTE');
export const ABOUT_PAGE = Symbol('ABOUT_PAGE');

export const HOME_PAGE_URI = '/';
export const ABOUT_PAGE_URI = '/about';

addRoute(HOME_PAGE, HOME_PAGE_URI);
addRoute(ABOUT_PAGE, ABOUT_PAGE_URI);
