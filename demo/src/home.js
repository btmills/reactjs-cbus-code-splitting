import React from 'react';
import Loadable from 'react-loadable';
import { Link } from 'react-router-dom';

import { profiles } from './database';
import Spinner from './spinner';

// import Map from './map';
const Map = Loadable({
	loader: () => import('./map' /* webpackChunkName: "map" */),
	loading: Spinner
});
const Chart = Loadable({
	loader: () => import('./chart' /* webpackChunkName: "chart" */),
	loading: Spinner
});
const Profile = Loadable({
	loader: () => import('./profile' /* webpackChunkName: "profile" */),
	loading: Spinner
});

const Home = () => (
	<div>
		<h1>Hello from React</h1>
		<h3>Profiles</h3>
		<ul onMouseOver={() => {
			Profile.preload();
			Chart.preload();
		}}>
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
