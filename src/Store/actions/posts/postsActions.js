import axios from 'axios';
import { GET_POSTS_DATA, GET_POSTS_DATA_SUCCESS, GET_POSTS_DATA_FAILURE } from '../../StringConstants';

const getData = () => {
	return { type: GET_POSTS_DATA };
};
const getDataFailure = () => {
	return { type: GET_POSTS_DATA_FAILURE };
};
const getDataSuccess = (data) => {
	return { type: GET_POSTS_DATA_SUCCESS, payload: data };
};

export const getPostsData = (url) => {
	return (dispatch) => {
		dispatch(getData());
		axios
			.get(url)
			.then((res) => {
				dispatch(getDataSuccess(res.data));
			})
			.catch((err) => {
				dispatch(getDataFailure());
			});
	};
};
