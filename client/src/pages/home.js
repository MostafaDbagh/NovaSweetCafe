import React from 'react'

import ReviewC from '../components/findus'

import Content from "../components/conten"
import Mostsales from '../components/mostsales'
import Offer from '../components/offer'
import Review from '../components/review'
import Lastsection from '../components/lastsection'
import Map from "../components/map"


export default ()=>{
    return (
        <div>
             <Content /> 
             <Mostsales/>
            <Offer /> 
            <Review/>
            
        
            <Map/>
             <Lastsection/>

        </div>
    )
}