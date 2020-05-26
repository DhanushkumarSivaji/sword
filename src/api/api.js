import axios from 'axios'

export const localData = axios.create({
    method: 'get',
    baseURL: 'http://localhost:3000/'
})