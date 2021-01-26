import React from 'react';
import './PostsItem.scss';
import { Link } from 'react-router-dom';

export default function PostsItem(props) {
	const { title, id } = props;
	return (
		<div className="postList">
			<p>{title}</p>
			<Link to={`/post_details/${id}`}>Post Details</Link>
		</div>
	);
}
