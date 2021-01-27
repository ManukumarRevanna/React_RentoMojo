import React from 'react';

import { Link } from 'react-router-dom';

//css
import './usersListItem.scss';

export default function userListItem(props) {
	const { Name, Company, id } = props;

	return (
		<tr>
			<td>{Name}</td>
			<td>{Company}</td>
			<td>
				<div className="postBtn">
					<Link to={`/posts/${id}`}>Posts</Link>
				</div>
			</td>
		</tr>
	);
}
