import axios from "axios"

export const api_key = '39fb760d251706885eec26584d7a974e';

export const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3/'
})