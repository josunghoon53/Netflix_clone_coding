import { call,put, takeEvery } from "redux-saga/effects";
import { movieData } from "../Api";
import { GENRES_FAILURE, GENRES_REQUEST, GENRES_SUCCESS } from "../reducers/genres";
import { MOVIE_SUCCESS } from "../reducers/movie";


const genresAPI= () => {
	return movieData.genre();
}




function* load_genres() {

	const genre = yield call(genresAPI)

	try{
		yield put({type:GENRES_SUCCESS, payload : genre.data.genres })
	} 
	
	catch(e) {
		console.log('F')
		yield put({type:GENRES_FAILURE})
	}
}







export default function* genresSaga(){
	yield takeEvery(GENRES_REQUEST,load_genres);
}