import React from 'react';
import Datamap from 'react-datamaps';

const Map = ({ profiles }) => (
	<Datamap
		bubbles={profiles.map(profile => ({
			fillKey: 'bubble',
			name: profile.name,
			latitude: profile.coordinates[0],
			longitude: profile.coordinates[1],
			radius: 20
		}))}
		fills={{
			bubble: '#4286f4',
			defaultFill: '#d5dce8'
		}}
		height={400}
		labels
		scope="usa"
		width={600}
	/>
);

export default Map;
