import Axios from 'axios'
import { API_HOST, API_KEY, LANG } from '../utils/constants'

export const getNewMoviesAPI = async (page = 1) => {
    const url = `${API_HOST}/movie/now_playing?api_key=${API_KEY}&language=${LANG}&page=${page}`
    const response = await Axios.get(url)
    return response.data
}

export const getMovieGenresAPI = async (genreIds) => {
    const url = `${API_HOST}/genre/movie/list?api_key=${API_KEY}&language=${LANG}`
    const response = await Axios.get(url)
    const genresArray = []
    genreIds.forEach(id => {
        response.data.genres.forEach(genre => {
            if (genre.id === id) genresArray.push(genre.name)
        })
    });
    return genresArray
}

export const getAllGenresAPI = async () => {
    const url = `${API_HOST}/genre/movie/list?api_key=${API_KEY}&language=${LANG}`
    const response = await Axios.get(url)
    return response.data.genres
}

export const getMoviesByGenreAPI = async (idGenre) => {
    const url = `${API_HOST}/discover/movie?api_key=${API_KEY}&with_genres=${idGenre}&language=${LANG}`
    const response = await Axios.get(url)
    return response.data.results
}

export const getMoviebyIdAPI = async (movieId) => {
    const url = `${API_HOST}/movie/${movieId}?api_key=${API_KEY}&language=${LANG}`
    const response = await Axios.get(url)
    return response.data
}

export const getMovieVideoAPI = async (movieId) => {
    const url = `${API_HOST}/movie/${movieId}/videos?api_key=${API_KEY}&language=${LANG}`
    const response = await Axios.get(url)
    const movieVideos = response.data.results
    let movieVideo = null
    movieVideos.forEach(video => {
        if (!movieVideo && video.site === "YouTube") {
            movieVideo = video.key
        }
    })
    return movieVideo
}

export const getPopularMoviesAPI = async (page = 1) => {
    const url = `${API_HOST}/movie/popular?api_key=${API_KEY}&language=${LANG}&page=${page}`
    const response = await Axios.get(url)
    return response.data
}

export const searchMoviesAPI = async (search) => {
    const url = `${API_HOST}/search/movie/?api_key=${API_KEY}&language=${LANG}&query=${search}`
    const response = await Axios.get(url)
    return response.data.results
}