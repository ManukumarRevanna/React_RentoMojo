import React from 'react';

//components
import PostDetailsItem from '../PostDetailsItem/PostDetailsItem';

export default function PostDetailsList(props) {
	const { data } = props;
	const { title, body, id } = data;

	return (
		<div>
			<PostDetailsItem title={title} body={body} key={id} postId={id} />
		</div>
	);
}
