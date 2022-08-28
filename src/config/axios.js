import axios from 'axios';

const clienteAxios = axios.create({
    baseURL : "https://restserver-base-maxi.herokuapp.com"
    //baseURL : "http://localhost:8080"
});

export default clienteAxios;