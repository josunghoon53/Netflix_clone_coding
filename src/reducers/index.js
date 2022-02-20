import {combineReducers} from 'redux'
import movie from './movie'
import video from './video'
import tv from './tv'
import tv_detail from './tv_detail'
import tv_similar from './tv_similar'
import tv_person from './tv_person'
import tv_genre from './tv_genre'

const rootReducer = combineReducers({

	movie,
	video,
	tv,
	tv_detail,
	tv_similar,
	tv_person,
	tv_genre


})



export default rootReducer