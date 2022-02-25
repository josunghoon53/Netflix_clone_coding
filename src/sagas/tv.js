import {call, put, takeEvery} from 'redux-saga/effects'
import { tvData } from '../Api';
import {TV_FAILURE, TV_REQUEST,UNIT_REQUEST,
GENRE_INFO, DETAIL_INFO, PERSON_INFO,SIMILAR_INFO} from '../reducers/tv'
import {DISCOVER_INFO} from '../reducers/t_genres';


const API = {
  discoverAPI : (url) =>{return tvData.discover(url)},
  genreAPI : ()=>{return tvData.genre()},
  detailAPI : (id)=>{return tvData.detail(id)},
  personAPI : (id) =>{return tvData.person(id)},
  similarAPI : (id) =>{return tvData.similar(id)}
}



//전체영화 데이터 및 장르 
function* loadtv(action) {
  const genredata = yield call (API.genreAPI,action.payload);
  const discoverdata = yield call (API.discoverAPI,action.url);
  try {
    yield put({type:GENRE_INFO, payload : genredata.data.genres});
    yield put({type:DISCOVER_INFO, payload : 
      {data : discoverdata.data.results, url : action.url}});
  } catch (e) {
    yield put({type:TV_FAILURE});
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
    yield put({type:TV_FAILURE});
  }
}



export default function* movieSaga () {
  yield takeEvery(TV_REQUEST,loadtv);
  yield takeEvery(UNIT_REQUEST,loadUnit);
}