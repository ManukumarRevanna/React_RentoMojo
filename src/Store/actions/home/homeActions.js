import axios from 'axios';
import { userDataUrl } from '../../../UrlConstants';

import { GET_HOME_DATA, GET_HOME_DATA_SUCCESS, GET_HOME_DATA_FAILURE} from '../../StringConstants';

const getData = () => {
  return {type: GET_HOME_DATA};
}
const getDataFailure = () => {
  return {type: GET_HOME_DATA_FAILURE};
}
const getDataSuccess = (data) => {
  return {type: GET_HOME_DATA_SUCCESS, payload: data};
}


export const getHomeData = () => {
  return (dispatch) => {
    dispatch(getData());
    axios.get(userDataUrl()).then(res => {
       dispatch(getDataSuccess(res.data));
    }).catch(err => {
       dispatch(getDataFailure());
    })
  }
}