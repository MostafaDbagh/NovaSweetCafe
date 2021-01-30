import axios from 'axios'

// const api = axios.create({
//     baseURL:'https://thawing-harbor-47972.herokuapp.com/api'
// })
const api = axios.create({
   
    baseURL:'https://novasweetcafe.herokuapp.com/api',   
    // baseURL:'http://localhost:3005/api ',   
  //    withCredentials: false,
  //   headers: {
  //     'Access-Control-Allow-Origin' : '*',
  //     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
  // }
})

export const insertUser = payloadd => api.post('/message',payloadd)


const apis = {insertUser}
export default apis;