import React from 'react'

import UserListItem from '../usersListItem/userListItem';

export default function usersList(props) {
    const { data } = props;
    
    return (
        <div>
            {data.map(item => <UserListItem Name={item.name} Company={item.company.name} key={item.id} id={item.id} />)}
        </div>
    )
}
