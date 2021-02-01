import axios from 'axios'

// const api = axios.create({
//     baseURL:'https://thawing-harbor-47972.herokuapp.com/api'
// })
const api = axios.create({
   
    baseURL:'https://novasweetcafe.herokuapp.com/api',  
    
     

})

export const insertReview = payloadd => api.post('/message',payloadd)

export const insertSubscriber = payload=> api.get('/subscribe',payload)
const apis = {insertReview,insertSubscriber}
export default apis;