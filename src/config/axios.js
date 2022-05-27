import axios from 'axios';
import baseUrl from './baseUrl';

const clientAxios = (token="") => axios.create({
    baseURL: `${baseUrl}`,
    headers: {  'Authorization': token ? `Bearer ${token}` : '',
                'Content-Type': 'application/json'},
    mode: 'no-cors'
});

export default clientAxios;
