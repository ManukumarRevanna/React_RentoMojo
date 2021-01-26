import React from 'react';
import { userPostUrl } from '../../UrlConstants';

export default function userListItem(props) {
	const { Name, Company, id } = props;

	const showID = () => {
		const url = userPostUrl(id);
		alert(url);
	};

	return (
		<tr>
			<td>{Name}</td>
			<td>{Company}</td>
			<td>
				<button onClick={showID} className="btn">
					Open Posts
				</button>
			</td>
		</tr>
	);
}
