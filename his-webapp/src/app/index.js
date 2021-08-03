import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { NavBar } from "../components";
import { MoviesList } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
     <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/movies/list" exact component={MoviesList} />
        </Switch>        
      </Router>
    
  );
}

export default App;
