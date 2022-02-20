import {call, put, takeEvery} from 'redux-saga/effects'
import {tvData } from '../Api';

import {TV_FAILURE, TV_REQUEST, TV_SUCCESS} from '../reducers/tv'

const tvAPI= (page) =>{

	return tvData.popular(page);
}


function* loadtv(action) {
  const tvdata = yield call(tvAPI,action.payload);
  try {
    yield put({type:TV_SUCCESS, payload : tvdata.data.results})
   
  } catch (e) {
    yield put({type:TV_FAILURE})
  }
}



export default function* tvSaga () {
  
  yield takeEvery(TV_REQUEST,loadtv)

  
}