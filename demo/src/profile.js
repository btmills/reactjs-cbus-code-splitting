import React from 'react';
import Datamap from 'react-datamaps';
import Loadable from 'react-loadable';

import { profiles } from './database';
import Spinner from './spinner';

import Chart from './chart';
// const Chart = Loadable({
// 	loader: () => import('./chart' /* webpackChunkName: "chart" */),
// 	loading: Spinner
// });
import Map from './map';
// const Map = Loadable({
// 	loader: () => import('./map' /* webpackChunkName: "map" */),
// 	loading: Spinner
// });

const Profile = ({ match }) => {
	const profile = profiles[match.params.id];
	return (
		<div>
			<h1>{profile.name}</h1>
			<Map profiles={[profile]} />
			<Chart employees={profile.employees} />
		</div>
	);
};

export default Profile;
