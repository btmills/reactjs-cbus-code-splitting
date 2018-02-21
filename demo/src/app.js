import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './home';
import Spinner from './spinner';

// import Company from './company';
const Company = Loadable({
	loader: () => import('./company'),
	loading: Spinner
});

const App = () => (
	<Router>
		<div>
			<Route exact path="/" component={Home} />
			<Route path="/company/:id" component={Company} />
		</div>
	</Router>
);

export default App;
