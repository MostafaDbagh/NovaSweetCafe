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
           <Route  path='/sushi' component={Sushi} />
          <Route  path='/sweet_buns' component={Sweet_buns} />
          <Route  path='/soup' component={Soup} />
          <Route  path='/cakes' component={Cakes} />
          <Route  path='/cold_beverages' component={Cold_Beverages} />
          <Route  path='/hot_beverages' component={Hot_Beverages} />
         
        </Switch>
      </Layout>
    </div>
  
    </div>
    
  );
}

export default App;