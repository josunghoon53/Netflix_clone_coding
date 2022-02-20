import {call, put, takeEvery} from 'redux-saga/effects'
import {tvData} from '../Api';

import {PERSON_FAILURE, PERSON_REQUEST, PERSON_SUCCESS} from '../reducers/tv_person'

const personAPI= (id) =>{

	return tvData.person(id);
}


function* loadperson(action) {
  const persondata = yield call(personAPI,action.payload);
  try {
    yield put({type:PERSON_SUCCESS, payload : persondata.data})
  } catch (e) {
    yield put({type:PERSON_FAILURE})
  }
}



export default function* personSaga () {
  
  yield takeEvery(PERSON_REQUEST,loadperson)

  
}