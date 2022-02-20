import {call, put, takeEvery} from 'redux-saga/effects'
import {tvData} from '../Api';

import {DETAIL_FAILURE, DETAIL_REQUEST, DETAIL_SUCCESS} from '../reducers/tv_detail'

const detailAPI= (id) =>{
	return tvData.detail(id)
}


function* load_detail(action) {
  const detaildata = yield call(detailAPI,action.payload);
  try {
    yield put({type:DETAIL_SUCCESS, payload : detaildata.data})
  } catch (e) {
    yield put({type:DETAIL_FAILURE})
  }
}



export default function* detailSaga () {
  
  yield takeEvery(DETAIL_REQUEST,load_detail)

  
}