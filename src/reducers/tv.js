/* ----------------- 액션 타입 ------------------------ */

export const TV_REQUEST =  'tv/TV_REQUEST'; 
export const UNIT_REQUEST =  'tv/UNIT_REQUEST'; 

export const GENRE_INFO=  'tv/GENRE_INFO'; 
export const DETAIL_INFO=  'tv/DETAIL_INFO'; 
export const PERSON_INFO=  'tv/PERSON_INFO'; 
export const SIMILAR_INFO=  'tv/SIMILAR_INFO'; 



export const CLEAR_INFO =  'tv/CLEAR_INFO'; 
export const TV_FAILURE =  'tv/TV_FAILURE'; 


/* ----------------- 액션 생성 함수 -------------------- */




/* ----------------- 모듈의 초기 상태 ------------------ */
const initialState = {
	genreInfo : [],
	detailInfo : [],
	personInfo : [],
	similarInfo : [],
}

/* ----------------- 리듀서 ---------------------------- */

export default function tv (state = initialState,action) {

	switch(action.type) {
		//데이터 호줄 성공시 
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
		case TV_FAILURE:
			return state;

		//기본값	
		default:
			return state;

	}


}