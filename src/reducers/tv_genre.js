
//액션 타입 
export const GENRES_REQUEST = 'tv/GENRES_REQUEST';
export const GENRES_SUCCESS = 'tv/GENRES_SUCCESS';
export const GENRES_FAILURE = 'tv/GENRES_FAILURE';



//초기변수
const genresState =  [];



//리듀서
export default function genres(state = genresState,action) {
	switch(action.type) {

		case GENRES_SUCCESS:
			return state = action.payload;

		case GENRES_FAILURE:
			return state

		default:
			return state

	}
}


