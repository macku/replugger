import { addRoute } from 'services/router/router';
import ContactPage from './Contact/Contact';

const CONTACT_PAGE = Symbol('CONTACT_PAGE');

export const CONTACT_PAGE_URL = '/contact';

addRoute(CONTACT_PAGE, CONTACT_PAGE_URL, ContactPage);
