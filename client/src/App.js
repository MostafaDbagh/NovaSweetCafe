import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'

//import Review from './pages/reviewpage'
//import Footer from './components/footer' 
//import Navbar from './components/navbar'
//import Map from './components/map'
//import Reviews from './components/review'
//import Offer from './components/offer'
import Layout from './components/layout'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/home'


function App() {

  
  return (
    <div className="App  ">
  <div className="App">
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/sushi' component={Sushi} />
          <Route exact path='/sweets_buns' component={Sweet_buns} />
          <Route exact path='/soup' component={Soup} />
          <Route exact path='/cakes' component={Cakes} />
          <Route exact path='/cold_beverages' component={Cold_Beverages} />
          <Route exact path='/hot_beverages' component={Hot_Beverages} />
          <Route exact path='/other' component={Other} /> */}
        </Switch>
      </Layout>
    </div>
  
    </div>
    
  );
}

export default App;