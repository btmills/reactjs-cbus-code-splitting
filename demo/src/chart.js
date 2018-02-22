import React from 'react';
import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	XAxis,
	YAxis
} from 'recharts';

const Chart = ({ employees }) => (
	<ResponsiveContainer width="100%" height={400}>
		<LineChart
			data={employees.map(([date, count]) => ({
				employees: count,
				timestamp: new Date(date).getTime()
			}))}
		>
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
);

export default Chart;
