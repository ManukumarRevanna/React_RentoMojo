import {
	GET_POSTDETAILS_DATA,
	GET_POSTDETAILS_DATA_SUCCESS,
	GET_POSTDETAILS_DATA_FAILURE,
} from '../../StringConstants';

const initialState = { postDetailsData: [] };

const postDetailsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_POSTDETAILS_DATA:
			return { ...state };
		case GET_POSTDETAILS_DATA_SUCCESS:
			return { ...state, postDetailsData: action.payload };
		case GET_POSTDETAILS_DATA_FAILURE:
			return { ...state };
		default:
			return { ...state };
	}
};

export default postDetailsReducer;
