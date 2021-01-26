import { GET_HOME_DATA, GET_HOME_DATA_SUCCESS, GET_HOME_DATA_FAILURE } from '../../StringConstants';

const initialState = { homeData: [] };

const homeReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_HOME_DATA:
			return { ...state };
		case GET_HOME_DATA_SUCCESS:
			return { ...state, homeData: action.payload };
		case GET_HOME_DATA_FAILURE:
			return { ...state };
		default:
			return { ...state };
	}
};

export default homeReducer;
