import axios from 'axios';

const API = axios.create({
    // baseURL: process.env.REACT_APP_API
    baseURL: "http://localhost:3000"
});

export default API;
