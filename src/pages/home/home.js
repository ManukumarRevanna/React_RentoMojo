import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHomeData } from '../../Store/actions/home/homeActions';

//components
import UserList from '../../components/usersList/usersList';

class Home extends Component {
	componentDidMount() {
		const { getData } = this.props;
		getData();
	}

	render() {
		const { usersList } = this.props;

		return (
			<div>
				<UserList data={usersList} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { homeReducer } = state;
	const { homeData } = homeReducer;
	return { usersList: homeData };
};

const mapDispatchToProps = (dispatch) => {
	return {
		getData: () => dispatch(getHomeData()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
