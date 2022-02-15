import {call, put, takeEvery} from 'redux-saga/effects'
import { movieData } from '../Api';

import {MOVIE_FAILURE, MOVIE_REQUEST, MOVIE_SUCCESS} from '../reducers/movie'

const movieAPI= () =>{

	return movieData.popular();
}


function* loadmovie(action) {
  const moviedata = yield call(movieAPI,action.payload);
  try {
    yield put({type:MOVIE_SUCCESS, payload : moviedata.data.results})
   
  } catch (e) {
    yield put({type:MOVIE_FAILURE})
  }
}



export default function* movieSaga () {
  
  yield takeEvery(MOVIE_REQUEST,loadmovie)

  
}