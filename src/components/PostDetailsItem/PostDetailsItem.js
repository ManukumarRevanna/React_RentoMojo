import React from 'react';

//css
import './PostDetailsItem.scss';

// import { Link } from 'react-router-dom';
import PostComments from '../postComments/PostComments';

export default function PostDetailsItem(props) {
	const { title, body, id } = props;

	return (
		<div>
			<div className="postDetailsCard">
				<p>
					<span>title: </span> {title}
				</p>
				<p>
					<span>description: </span> {body}
				</p>
				<button className="commentsBtn">Comments</button>
			</div>

			<div className="commentsSection">
				<PostComments />
			</div>
		</div>
	);
}
