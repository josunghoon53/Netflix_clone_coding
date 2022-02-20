/* ----------------- 액션 타입 ------------------------ */

export const TV_REQUEST =  'tv/TV_REQUEST'; 
export const TV_SUCCESS =  'tv/TV_SUCCESS'; 
export const TV_FAILURE =  'tv/TV_FAILURE'; 


/* ----------------- 액션 생성 함수 -------------------- */




/* ----------------- 모듈의 초기 상태 ------------------ */

const tvState = [];
let copy = [];
/* ----------------- 리듀서 ---------------------------- */

export default function tv (state = tvState,action) {


	switch(action.type) {

		case TV_SUCCESS:


			action.payload.map((el)=>{
				if(el.backdrop_path !== null && el.original_language == 'ko'){
					copy.push(el)
				}
			})

			state = copy;
			
			return state;
			
		case TV_FAILURE:
			return state;


		default:
			return state	

	}


}