import React from 'react';
import Datamap from 'react-datamaps';

import { companies } from './database';

const Company = ({ match }) => {
	const {
		name,
		coordinates: [latitude, longitude],
		employees
	} = companies[match.params.id];

	return (
		<div>
			<h1>Profile {match.params.id}</h1>
			<Datamap
				bubbles={[{
					fillKey: 'bubble',
					name,
					latitude,
					longitude,
					radius: 20
				}]}
				fills={{
					bubble: '#4286f4',
					defaultFill: '#d5dce8'
				}}
				height={400}
				labels
				scope="usa"
				width={600}
			/>
		</div>
	);
};

export default Company;
