import axios from 'axios';

const api = axios.create({
  baseURL: 'http://cursocelkeapi-com-br.umbler.net',
});

export default api;
