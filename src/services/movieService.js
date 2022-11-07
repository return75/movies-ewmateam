import Vue from "vue";
import makeQueryString from '../scripts/make-query-string'
let axios = Vue.prototype.$axios

//let BASE_URL = process.env.BASE_URL
//let API_KEY = process.env.API_KEY

let BASE_URL = 'https://api.themoviedb.org/3'
let API_KEY = 'f62f750b70a8ef11dad44670cfb6aa57'


export default {
  getMoviesList: (filter = {}) => {
    let queryString = makeQueryString(filter)
    return axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&${queryString}`)
  },
  getGenres: () => {
    return axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
  },
  getMovieDetails: (movieId) => {
    return axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
  }
}
