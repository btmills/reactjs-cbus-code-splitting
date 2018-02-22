import React from 'react';
import Datamap from 'react-datamaps';

import Chart from './chart';
import { profiles } from './database';
import Map from './map';

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
