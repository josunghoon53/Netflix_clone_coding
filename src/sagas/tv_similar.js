import {call, put, takeEvery} from 'redux-saga/effects'
import {tvData } from '../Api';

import {SIMILAR_FAILURE, SIMILAR_REQUEST, SIMILAR_SUCCESS} from '../reducers/tv_similar'

const similarAPI= (id) =>{
	return tvData.similar(id)
}


function* load_similar(action) {
  const similardata = yield call(similarAPI,action.payload);
  try {
    yield put({type:SIMILAR_SUCCESS, payload : similardata.data})
  } catch (e) {
    yield put({type:SIMILAR_FAILURE})
  }
}



export default function* similarSaga () {
  
  yield takeEvery(SIMILAR_REQUEST,load_similar)

  
}