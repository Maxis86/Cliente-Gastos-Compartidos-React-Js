import axios from 'axios';

const clienteAxios = axios.create({
    //baseURL : "https://servidor-gastos-compartidos.herokuapp.com/"
    baseURL : "http://localhost:8080"
    //baseURL : "https://servidor-gastos-compartidos-node-production.up.railway.app/"

});

export default clienteAxios;