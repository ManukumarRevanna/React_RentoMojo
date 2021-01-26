import React from 'react';

//components
import UserListItem from '../usersListItem/userListItem';
//CSS
import './usersList.scss';

export default function usersList(props) {
	const { data } = props;

	return (
		<div className="usersTable">
			<h2>Users List</h2>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Company Name</th>
						<th>Posts Link</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item) => (
						<UserListItem Name={item.name} Company={item.company.name} key={item.id} id={item.id} />
					))}
				</tbody>
			</table>
		</div>
	);
}
