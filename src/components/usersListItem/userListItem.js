import React from 'react';

import { Link } from 'react-router-dom';

export default function userListItem(props) {
	const { Name, Company, id } = props;

	return (
		<tr>
			<td>{Name}</td>
			<td>{Company}</td>
			<td>
				<Link to={`/posts/${id}`}>Posts</Link>
			</td>
		</tr>
	);
}
