import React from 'react';


import Review from './pages/reviewpage'
import Footer from './components/footer' 
import Navbar from './components/navbar'
import Map from './components/map'
import Reviews from './components/review'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header'

function App() {

  
  return (
    <div className="App  ">
<Header />
     <Navbar/> 
     <Reviews/>
     <Review/>
     <Map/>
    
     <Footer /> 
  
    </div>
    
  );
}

export default App;