/* ----------------- 액션 타입 ------------------------ */

export const PERSON_REQUEST =  'tv/PERSON_REQUEST'; 
export const PERSON_SUCCESS =  'tv/PERSON_SUCCESS'; 
export const PERSON_FAILURE =  'tv/PERSON_FAILURE'; 


/* ----------------- 액션 생성 함수 -------------------- */




/* ----------------- 모듈의 초기 상태 ------------------ */

const personState = [];

/* ----------------- 리듀서 ---------------------------- */

export default function person (state = personState,action) {

	switch(action.type) {

		case PERSON_SUCCESS:
			return state = action.payload.cast.slice(0,4)
			
		case PERSON_FAILURE:
			return state;


		default:
			return state	

	}


}