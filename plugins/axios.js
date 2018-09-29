import iaxios from 'axios'
import config from '../config.js'

var axios = iaxios.create({
  baseURL: config.API_URL,
});

module.exports = axios;