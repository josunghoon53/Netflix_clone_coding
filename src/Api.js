import axios from "axios";


const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
		params : {
			api_key : 'f0e9c326ae392f0537ec51aac4cec7d1',
			language : 'ko'
		}
})



export const movieData = {
	popular : () => api.get('movie/popular'),
	video : (id) => api.get(`movie/${id}/videos`),
	genre : () => api.get('genre/movie/list')
}
