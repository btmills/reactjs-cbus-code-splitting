import React from 'react';
import { Link } from 'react-router-dom';

import { profiles } from './database';
import Map from './map';

const Home = () => (
	<div>
		<h1>Hello from React</h1>
		<h3>Profiles</h3>
		<ul>
			{Object.keys(profiles).map(id => (
				<li key={id}>
					<Link to={`/profile/${id}`}>
						{profiles[id].name}
					</Link>
				</li>
			))}
		</ul>
		<Map profiles={Object.values(profiles)} />
	</div>
);

export default Home;
