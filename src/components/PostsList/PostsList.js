import React from 'react';

import PostsItem from '../PostsItem/PostsItem';

//CSS
import './PostsList.scss';

export default function PostsList(props) {
	const { data } = props;

	return (
		<div>
			<h2>Posts</h2>
			{data.map((item) => (
				<PostsItem title={item.title} body={item.body} key={item.id} id={item.id} />
			))}
		</div>
	);
}
