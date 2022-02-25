import {combineReducers} from 'redux'
import movie from './movie'
import tv from './tv'
import m_genres from './m_genres'
import t_genres from './t_genres'


const rootReducer = combineReducers({
	movie,
	tv,
	m_genres,
	t_genres
})



export default rootReducer