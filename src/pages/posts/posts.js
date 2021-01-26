import React, { Component } from 'react';
import { connect } from 'react-redux';

import { generateUserPostsUrl } from '../../UrlConstants';

import { getPostsData } from '../../Store/actions/posts/postsActions';

//Components
import PostsList from '../../components/PostsList/PostsList';

class Posts extends Component {
	componentDidMount() {
		const { match, getPostsData } = this.props;
		const { params } = match;
		const { id } = params;
		getPostsData(generateUserPostsUrl(id));
	}

	render() {
		const { postData } = this.props;

		return <PostsList data={postData} />;
	}
}

const mapStateToProps = (state) => {
	const { postsReducer } = state;
	const { postData } = postsReducer;
	return { postData };
};

const mapDispatchToProps = (dispatch) => {
	return {
		getPostsData: (url) => dispatch(getPostsData(url)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
