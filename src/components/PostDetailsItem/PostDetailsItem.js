import React from 'react';

// import { Link } from 'react-router-dom';
import PostComments from '../postComments/PostComments';

export default function PostDetailsItem(props) {
	const { title, body, id } = props;

	return (
		<div>
			<div>
				<p>title: {title}</p>
				<p>body: {body}</p>
				<p>Comments</p>
			</div>

			<div>
				<PostComments />
			</div>
		</div>
	);
}
