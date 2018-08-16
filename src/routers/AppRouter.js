import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PrivateDashboard from '../components/PrivateDashboard.js';
import HelpPage from '../components/HelpPage.js';
import PageNotFound from '../components/PageNotFound.js';
import LoginPage from '../components/LoginPage.js';
import PrivateRoute from './PrivateRoute.js';
import PublicRoute from './PublicRoute.js';

import { Header } from '../components/Header';
import Portfolio from '../components/portfolio/Portfolio';

export const history = createHistory();

// Switch goes through all the routes until it finds a match
const AppRouter = () => (
	<Router history={history}>
		<div>
			<Header />
			<Switch>
				<PublicRoute path="/" component={Portfolio} exact={true} />
				<Route component={PageNotFound} />
			</Switch>
		</div>
    </Router>
);

export default AppRouter;