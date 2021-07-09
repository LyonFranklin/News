import axios from 'axios'

export const http = axios.create({
    baseURL:'//hacker-news.firebaseio.com/v0/'
})