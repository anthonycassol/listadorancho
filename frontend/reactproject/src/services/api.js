import axios from 'axios';

const api = axios.create({
    baseURL: 'https://listadorancho.herokuapp.com/'
});
export default api;
