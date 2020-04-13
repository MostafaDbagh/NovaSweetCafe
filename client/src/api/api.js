import axios from 'axios'

const api = axios.create({
    baseURL:'https://stark-beyond-97556.herokuapp.com'
})

export const insertUser = payloadd => api.post('/Login',payloadd)


const apis = {insertUser}
export default apis;