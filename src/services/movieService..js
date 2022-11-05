import Vue from "vue";
let axios = Vue.prototype.$axios

//let BASE_URL = process.env.BASE_URL
let BASE_URL = 'https://api.themoviedb.org/3'
let API_KEY = 'f62f750b70a8ef11dad44670cfb6aa57'
//let API_KEY = process.env.API_KEY

export default {
  getMoviesList(page = 1) {
    return axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${page}`)
  },
  getGenres() {
    return axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
  }
}
