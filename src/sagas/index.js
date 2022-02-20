import {all, call} from 'redux-saga/effects';
import movie from './movie'
import video from './video'
import tv from './tv';
import tv_detail from './tv_detail';
import tv_similar from './tv_similar'
import tv_person from './tv_person'
import tv_genre from './tv_genre'

export default function* rootSaga() {
  yield all ([
    call(movie),
    call(video),
    call(tv),
    call(tv_detail),
    call(tv_similar),
    call(tv_person),
    call(tv_genre)
  ])
}