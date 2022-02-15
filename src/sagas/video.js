import {call, put, takeEvery} from 'redux-saga/effects'
import { movieData } from '../Api';

import {VIDEO_FAILURE, VIDEO_REQUEST, VIDEO_SUCCESS} from '../reducers/video'

const videoAPI= (id) =>{
	return movieData.video(id)
}


function* load_video(action) {
  const videodata = yield call(videoAPI,action.payload);
  try {
    yield put({type:VIDEO_SUCCESS, payload : videodata.data})
  } catch (e) {
    yield put({type:VIDEO_FAILURE})
  }
}



export default function* videoSaga () {
  
  yield takeEvery(VIDEO_REQUEST,load_video)

  
}