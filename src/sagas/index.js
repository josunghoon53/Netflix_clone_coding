import {all, call} from 'redux-saga/effects';
import movie from './movie'



export default function* rootSaga() {
  yield all ([
    call(movie)

  ])
}