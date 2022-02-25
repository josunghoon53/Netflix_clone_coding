export const MOVIE_REQUEST =  'movie/MOVIE_REQUEST'; 
export const UNIT_REQUEST =  'movie/UNIT_REQUEST'; 

export const DISCOVER_INFO=  'movie/DISCOVER_INFO'; 

export const CLEAR_INFO =  'movie/CLEAR_INFO'; 
export const MOVIE_FAILURE =  'movie/MOVIE_FAILURE'; 


/*------------------------------------------------------*/


const  discoverInfo = {
	popular:[],
	action:[],
	korea:[],
	animation:[]
}


/* ----------------- 리듀서 ---------------------------- */

export default function genres (state = discoverInfo,action) {

	switch(action.type) {

		//데이터 호출 성공시 
		case DISCOVER_INFO: {	
			if(action.payload.url === 'with_original_language=ko'){
				return {...state,korea:action.payload.data};				
			}

			if(action.payload.url === 'with_genres=28,53'){
				return {...state,action:action.payload.data};				
			}

			if(action.payload.url === 'with_genres=16'){
				return {...state,animation:action.payload.data};				
			}

			if(action.payload.url === 'sort_by=popularity.desc'){
				return {...state,popular:action.payload.data};				
			}

			break;
		}
	
		//데이터 호출 실패시
		case MOVIE_FAILURE: {
			return state;
		}
		//기본값	
		default:
			return state;

	}


}