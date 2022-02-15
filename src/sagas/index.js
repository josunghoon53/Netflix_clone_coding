import {all, call} from 'redux-saga/effects';
import movie from './movie'
import video from './video'
import genres from './genres';

export default function* rootSaga() {
  yield all ([
    call(movie),
    call(video),
    call(genres)
  ])
}