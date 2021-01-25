import React from 'react'
import { userPostUrl } from '../../UrlConstants';

export default function userListItem(props) {
    const { Name, Company, id } = props;
    
    const showID = () => {
        const url = userPostUrl(id);
        alert(url)

    }

    return (
        <div onClick={showID}>
            <p>Name: {Name} </p>
            <p>Company: {Company}</p>
        </div>
    )
}
