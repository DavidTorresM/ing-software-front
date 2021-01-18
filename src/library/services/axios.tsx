import * as _axios from 'axios';

const axios = _axios.default.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 3000,
});

export default axios;
