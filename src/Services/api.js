import axios from "axios";

export const key = '30250f3307b92fb460e13d103afaac6e';

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3'
})

export default api;

