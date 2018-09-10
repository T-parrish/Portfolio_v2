import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PageNotFound from '../components/PageNotFound.js';

import NavWrapper from '../components/fullscreen-nav/NavWrapper';
import MicroBrowser from '../components/microUI/MicroBrowser';

export const history = createHistory();

// Method to pass props to a Route
// <Route path="/abc" render={()=><TestWidget num="2" someProp={100}/>}/>

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<Route path="/" component={NavWrapper} exact={true} />
				<Route path="/portfolio" render={()=> <MicroBrowser displayType={'portfolio'}/>} exact={true} />
				<Route path="/about" render={()=> <MicroBrowser displayType={'about'}/>} exact={true} />
				<Route path="/blog" render={()=> <MicroBrowser displayType={'blog'}/>} exact={true} />
				<Route path="/music" render={()=> <MicroBrowser displayType={'music'}/>} exact={true} />
				<Route component={PageNotFound} />
			</Switch>
		</div>
  </Router>
);

export default AppRouter;