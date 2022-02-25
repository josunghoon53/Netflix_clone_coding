/* ----------------- 액션 타입 ------------------------ */

export const MOVIE_REQUEST =  'movie/MOVIE_REQUEST'; 
export const UNIT_REQUEST =  'movie/UNIT_REQUEST'; 

export const MOVIE_INFO=  'movie/MOVIE_INFO'; 
export const GENRE_INFO=  'movie/GENRE_INFO'; 
export const DISCOVER_INFO=  'movie/DISCOVER_INFO'; 
export const DETAIL_INFO=  'movie/DETAIL_INFO'; 
export const PERSON_INFO=  'movie/PERSON_INFO'; 
export const SIMILAR_INFO=  'movie/SIMILAR_INFO'; 


export const CLEAR_INFO =  'movie/CLEAR_INFO'; 
export const MOVIE_FAILURE =  'movie/MOVIE_FAILURE'; 

/* ----------------- 액션 생성 함수 -------------------- */



/* ----------------- 모듈의 초기 상태 ------------------ */

const initialState = {
	movieInfo : [],
	genreInfo : [],
	detailInfo : [],
	personInfo : [],
	similarInfo : [],
}

/* ----------------- 리듀서 ---------------------------- */

export default function movie (state = initialState,action) {

	switch(action.type) {

		//데이터 호출 성공시 

		case GENRE_INFO: {
			return {...state,genreInfo:action.payload};				
		}

		case DETAIL_INFO: {
			return {...state,detailInfo:action.payload};				
		}

		case PERSON_INFO: {
			return {...state,personInfo:action.payload.cast.slice(0,4)};	
		}

		case SIMILAR_INFO: {
			return {...state,similarInfo:action.payload.results};					
		}

	
		
		//데이터 호출 실패시
		case MOVIE_FAILURE:
			return state;

		//기본값	
		default:
			return state;

	}


}