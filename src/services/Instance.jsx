import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://private-anon-a9e52669da-pizzaapp.apiary-mock.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;