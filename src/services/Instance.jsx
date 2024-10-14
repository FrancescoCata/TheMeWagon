import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://18.194.21.216',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;