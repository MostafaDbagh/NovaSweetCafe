import React from 'react'



import Content from "../components/conten"

import Offer from '../components/offer'
import Review from '../components/review'
import Lastsection from '../components/lastsection'
import Map from "../components/map"


export default ()=>{
    return (
        <div>
             <Content /> 
             
            <Offer /> 
            <Review/>
            
        
            <Map/>
             <Lastsection/>

        </div>
    )
}