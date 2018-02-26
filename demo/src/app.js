import React from 'react';
import Loadable from 'react-loadable';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './home';
import Spinner from './spinner';

import Profile from './profile';
// const Profile = Loadable({
// 	loader: () => import('./profile' /* webpackChunkName: "profile" */),
// 	loading: Spinner
// });

const App = () => (
	<Router>
		<div>
			<Route exact path="/" component={Home} />
			<Route path="/profile/:id" component={Profile} />
			<a href="/report.html">Bundle Analyzer</a>
		</div>
	</Router>
);

export default App;
