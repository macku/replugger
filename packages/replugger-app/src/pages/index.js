import { HOME, ABOUT, getRoute } from 'constants/routes';
import { addRoute } from 'services/router/router';

import About from './About/About';
import Dashboard from './Dashboard/Dashboard';

addRoute(ABOUT, getRoute(ABOUT), About);
addRoute(HOME, getRoute(HOME), Dashboard, true);
