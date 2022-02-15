/* ----------------- 액션 타입 ------------------------ */

export const VIDEO_REQUEST =  'video/VIDEO_REQUEST'; 
export const VIDEO_SUCCESS =  'video/VIDEO_SUCCESS'; 
export const VIDEO_FAILURE =  'video/VIDEO_FAILURE'; 


/* ----------------- 액션 생성 함수 -------------------- */




/* ----------------- 모듈의 초기 상태 ------------------ */

const videoState = [];

/* ----------------- 리듀서 ---------------------------- */

export default function video (state = videoState,action) {

	switch(action.type) {

		case VIDEO_SUCCESS:
			return state = action.payload;
		case VIDEO_FAILURE:
			return state;


		default:
			return state	

	}


}