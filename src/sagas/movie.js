import {takeEvery} from 'redux-saga/effects'
import {MOVIE_REQUEST} from '../reducers/movie'

function* loadmovie() {

  try {
    
   
  } catch (e) {
    
  }
}



export default function* movieSaga () {
  
  yield takeEvery(MOVIE_REQUEST,loadmovie)
  
}