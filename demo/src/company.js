import React from 'react';

const Company = ({ match }) => (
	<h1>Profile {match.params.id}</h1>
);

export default Company;
