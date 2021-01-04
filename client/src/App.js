import React from 'react';


import Review from './pages/reviewpage'
import Footer from './components/footer' 
import Navbar from './components/navbar'
import Map from './components/map'
import Reviews from './components/review'
import Offer from './components/offer'
import Content from './components/conten'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header'


function App() {

  
  return (
    <div className="App  ">
<Header />
     <Navbar/> 
     <Content />
     <Offer/>
     <Reviews/>
  <Review/>


     <Map/>
    
     <Footer /> 
  
    </div>
    
  );
}

export default App;