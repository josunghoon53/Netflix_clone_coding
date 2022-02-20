/* ----------------- 액션 타입 ------------------------ */

export const DETAIL_REQUEST =  'tv/DETAIL_REQUEST'; 
export const DETAIL_SUCCESS =  'tv/DETAIL_SUCCESS'; 
export const DETAIL_FAILURE =  'tv/DETAIL_FAILURE'; 


/* ----------------- 액션 생성 함수 -------------------- */




/* ----------------- 모듈의 초기 상태 ------------------ */

const detailState = [];

/* ----------------- 리듀서 ---------------------------- */

export default function detail (state = detailState,action) {

	switch(action.type) {

		case DETAIL_SUCCESS:
			return state = action.payload;
		case DETAIL_FAILURE:
			return state;


		default:
			return state	

	}


}