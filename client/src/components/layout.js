import React from 'react'
import {
    BrowserRouter as Router,
} from 'react-router-dom'
import Header from './header'
import Navbar from './navbar'
import Footer from './footer'

export default ({children})=>{
    return (
        <Router>
            <Header/>
            <Navbar/>
            {children}
            <Footer/>
        </Router>
    )
}