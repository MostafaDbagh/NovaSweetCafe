import axios from 'axios'

const api = axios.create({
    baseURL:'https://thawing-harbor-47972.herokuapp.com/api'
})

export const insertUser = payloadd => api.post('/Login',payloadd)


const apis = {insertUser}
export default apis;