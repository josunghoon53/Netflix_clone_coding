import { call,put, takeEvery } from "redux-saga/effects";
import { tvData } from "../Api";
import { GENRES_FAILURE, GENRES_REQUEST, GENRES_SUCCESS } from "../reducers/tv_genre";



const genresAPI= () => {
	return tvData.genre();
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