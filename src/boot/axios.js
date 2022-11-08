import Vue from 'vue'
import axios from 'axios'

axios.defaults.timeout === 3000;
Vue.prototype.$axios = axios
