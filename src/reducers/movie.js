/* ----------------- 액션 타입 ------------------------ */

export const MOVIE_REQUEST =  'movie/MOVIE_REQUEST'; 
export const MOVIE_SUCCESS =  'movie/MOVIE_SUCCESS'; 
export const MOVIE_FAILURE =  'movie/MOVIE_FAILURE'; 


/* ----------------- 액션 생성 함수 -------------------- */



/* ----------------- 모듈의 초기 상태 ------------------ */

const movieState = [];

/* ----------------- 리듀서 ---------------------------- */

export default function movie (state = movieState,action) {
	return state

}