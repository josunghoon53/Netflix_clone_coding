import {call, put, takeEvery} from 'redux-saga/effects'
import { movieData } from '../Api';

import {MOVIE_FAILURE, MOVIE_REQUEST,UNIT_REQUEST,
MOVIE_INFO,GENRE_INFO, DETAIL_INFO, PERSON_INFO,SIMILAR_INFO} from '../reducers/movie'



const API = {
  movieAPI :  (page)=>{return movieData.popular(page)},
  genreAPI : ()=>{return movieData.genre()},
  detailAPI : (id)=>{return movieData.detail(id)},
  personAPI : (id) =>{return movieData.person(id)},
  similarAPI : (id) =>{return movieData.similar(id)}
}



//전체영화 데이터 및 장르 
function* loadmovie(action) {
  const moviedata = yield call(API.movieAPI,action.payload);
  const genredata = yield call (API.genreAPI,action.payload);
  try {
    yield put({type:MOVIE_INFO, payload : moviedata.data.results});;
    yield put({type:GENRE_INFO, payload : genredata.data.genres});
  } catch (e) {
    yield put({type:MOVIE_FAILURE});
  }
}


//특정영화 데이터 및 장르 (ID값이 들어가는 API)
function* loadUnit(action) {
  const detaildata = yield call (API.detailAPI,action.payload);
  const persondata = yield call (API.personAPI,action.payload);
  const similardata = yield call (API.similarAPI,action.payload);
  try{
    yield put({type:DETAIL_INFO, payload : detaildata.data});
    yield put({type:PERSON_INFO, payload : persondata.data});
    yield put({type:SIMILAR_INFO, payload : similardata.data});
  } catch(e) {
    yield put({type:MOVIE_FAILURE});
  }
}



export default function* movieSaga () {
  yield takeEvery(MOVIE_REQUEST,loadmovie);
  yield takeEvery(UNIT_REQUEST,loadUnit);
}