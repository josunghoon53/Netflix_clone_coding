//액션 타입 

export const COORDI_SET =  'coorvalue/COORDI_SET'; 

//모듈초기상태 

const coordiState = [{
	top:0,
	left:0,
	scale:1,
	width:0,
	height:0,
	slideCnt : 4,
	currentIdx : 0
}];

//리듀서

export const coordi = (state = coordiState,action)=>{

	switch(action.type) {
		
		case COORDI_SET: {
			return state = action.payload 
		}

		
		default: {
			return state;
		}

	}
}  

