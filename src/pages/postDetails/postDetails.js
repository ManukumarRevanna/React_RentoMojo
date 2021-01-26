import React, { Component } from 'react';
import { connect } from 'react-redux';

import { generatePostUrl } from '../../UrlConstants';

import { getPostsDetailsData } from '../../Store/actions/postDetails/postDetailsActions';

//components
import PostDetailsList from '../../components/PostDetailsList/PostDetailsList';

class PostDetails extends Component {
	componentDidMount() {
		const { match, getPostsDetails } = this.props;
		const { params } = match;
		const { id } = params;
		getPostsDetails(generatePostUrl(id));
	}

	render() {
		const { postDetailsData } = this.props;
		return (
			<div>
				<PostDetailsList data={postDetailsData} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { postDetailsReducer } = state;
	const { postDetailsData } = postDetailsReducer;
	return { postDetailsData };
};

const mapDispatchToProps = (dispatch) => {
	return {
		getPostsDetails: (url) => dispatch(getPostsDetailsData(url)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
