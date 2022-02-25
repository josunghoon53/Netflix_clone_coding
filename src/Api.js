import axios from "axios";

export const api = axios.create({
	
    baseURL: "https://api.themoviedb.org/3/",
		params : {
			api_key : 'f0e9c326ae392f0537ec51aac4cec7d1',
			language : 'ko',
			
		}
})



export const movieData = {
	genre : () => api.get('genre/movie/list'),
	detail : (id) => api.get(`movie/${id}`),
	video : (id) => api.get(`movie/${id}/videos`),
	similar : (id) => api.get(`movie/${id}/similar`),
	person : (id) => api.get(`movie/${id}/credits`),
	discover : (url) => api.get(`discover/movie?${url}`)
}

export const tvData = {
	detail : (id) => api.get(`tv/${id}`),
	genre : () => api.get('genre/tv/list'),
	person : (id) => api.get(`tv/${id}/credits`),
	similar : (id) => api.get(`tv/${id}/similar`),
	discover : (url) => api.get(`discover/tv?${url}`)
}

