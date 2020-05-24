import axios from 'axios'

export const localData = axios.create({
    baseURL: 'http://localhost:3000/'
})