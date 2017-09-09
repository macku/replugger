import { addRoute } from '../../constants/routes';

export const CONTACT_PAGE = Symbol('CONTACT_PAGE');
export const CONTACT_PAGE_URL = '/contact';

addRoute(CONTACT_PAGE, CONTACT_PAGE_URL);
