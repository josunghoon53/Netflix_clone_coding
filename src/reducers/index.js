import {combineReducers} from 'redux'
import movie from './movie'
import video from './video'
import genres from './genres';


const rootReducer = combineReducers({

	movie,
	video,
	genres


})



export default rootReducer