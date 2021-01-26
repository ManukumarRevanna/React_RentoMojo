import axios from 'axios';
import {
	GET_POSTDETAILS_DATA,
	GET_POSTDETAILS_DATA_SUCCESS,
	GET_POSTDETAILS_DATA_FAILURE,
} from '../../StringConstants';

const getData = () => {
	return { type: GET_POSTDETAILS_DATA };
};
const getDataFailure = () => {
	return { type: GET_POSTDETAILS_DATA_FAILURE };
};
const getDataSuccess = (data) => {
	return { type: GET_POSTDETAILS_DATA_SUCCESS, payload: data };
};

export const getPostsDetailsData = (url) => {
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
