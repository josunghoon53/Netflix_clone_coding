/* ----------------- 액션 타입 ------------------------ */

export const SIMILAR_REQUEST =  'tv/SIMILAR_REQUEST'; 
export const SIMILAR_SUCCESS =  'tv/SIMILAR_SUCCESS'; 
export const SIMILAR_FAILURE =  'tv/SIMILAR_FAILURE'; 


/* ----------------- 액션 생성 함수 -------------------- */




/* ----------------- 모듈의 초기 상태 ------------------ */

const similarState = [];

/* ----------------- 리듀서 ---------------------------- */

export default function similar (state = similarState,action) {

	switch(action.type) {

		case SIMILAR_SUCCESS:
			return state = action.payload.results;
		case SIMILAR_FAILURE:
			return state;


		default:
			return state	

	}


}