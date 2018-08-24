import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PageNotFound from '../components/PageNotFound.js';

import NavWrapper from '../components/fullscreen-nav/NavWrapper';

export const history = createHistory();

// Switch goes through all the routes until it finds a match
const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<Route path="/" component={NavWrapper} exact={true} />
				<Route component={PageNotFound} />
			</Switch>
		</div>
  </Router>
);

export default AppRouter;