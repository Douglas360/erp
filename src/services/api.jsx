import axios from 'axios';

//const token = localStorage.getItem('token');

export const api = axios.create({
    baseURL: 'http://192.168.1.96:3001',

    /*headers: {
      Authorization: `Bearer ${token}`,
    },*/

});
