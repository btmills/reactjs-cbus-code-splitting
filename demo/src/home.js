import React from 'react';
import { Link } from 'react-router-dom';

import { companies } from './database';

const Home = () => (
	<div>
		<h1>Hello from React</h1>
		<h3>Companies</h3>
		<ul>
			{Object.keys(companies).map(id => (
				<li key={id}>
					<Link to={`/company/${id}`}>
						{companies[id].name}
					</Link>
				</li>
			))}
		</ul>
	</div>
);

export default Home;
