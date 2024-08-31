import axios from 'axios';

const baseURL = 'https://api-dev.buxonline.org/api/v1/';

const customAxios = axios.create({ baseURL });

export default customAxios;
