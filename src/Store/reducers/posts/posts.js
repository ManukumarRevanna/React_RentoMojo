import { GET_POSTS_DATA, GET_POSTS_DATA_SUCCESS, GET_POSTS_DATA_FAILURE } from '../../StringConstants';

const initialState = { postData: [] };

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_POSTS_DATA:
			return { ...state };
		case GET_POSTS_DATA_SUCCESS:
			return { ...state, postData: action.payload };
		case GET_POSTS_DATA_FAILURE:
			return { ...state };
		default:
			return { ...state };
	}
};

export default postsReducer;
