import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'

import {
  Home,
  Sushi,
  Sweet_buns,
  Soup,
  Cakes,
  Cold_Beverages,
  Hot_Beverages,
 
} from './pages'
import Layout from './components/layout'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {

  
  return (
    <div className="App  ">
  <div className="App">
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
           <Route exact path='/sushi' component={Sushi} />
          <Route exact path='/sweets_buns' component={Sweet_buns} />
          <Route exact path='/soup' component={Soup} />
          <Route exact path='/cakes' component={Cakes} />
          <Route exact path='/cold_beverages' component={Cold_Beverages} />
          <Route exact path='/hot_beverages' component={Hot_Beverages} />
         
        </Switch>
      </Layout>
    </div>
  
    </div>
    
  );
}

export default App;