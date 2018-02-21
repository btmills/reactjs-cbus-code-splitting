import React from 'react';
import Datamap from 'react-datamaps';
import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis
} from 'recharts';

import { companies } from './database';

const Company = ({ match }) => {
	const {
		name,
		coordinates: [latitude, longitude],
		employees
	} = companies[match.params.id];
	const data = employees.map(([d, count]) => ({
		employees: count,
		timestamp: new Date(d).getTime()
	}));

	return (
		<div>
			<h1>{name}</h1>
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
			<ResponsiveContainer width="100%" height={400}>
				<LineChart data={data}>
					<XAxis
						dataKey="timestamp"
						domain={['auto', 'dataMax']}
						tickFormatter={tick => {
							const d = new Date(tick);
							return `${d.getUTCFullYear()}-${d.getUTCMonth()}-${d.getUTCDate()}`;
						}}
						type="number"
					/>
					<YAxis />
					<CartesianGrid strokeDashArray="3 3" />
					<Line
						dataKey="employees"
						type="monotone"
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Company;
