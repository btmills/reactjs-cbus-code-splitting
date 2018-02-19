import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Company from './company';
import Home from './home';

const App = () => (
	<Router>
		<div>
			<Route exact path="/" component={Home} />
			<Route path="/company/:id" component={Company} />
		</div>
	</Router>
);

export default App;
