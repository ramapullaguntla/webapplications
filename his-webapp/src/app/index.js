import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import  NavBar  from "../components/NavBar";
import {MovieInsert, MoviesList, MovieUpdate} from '../pages'


import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
     <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/movies/list" exact component={MoviesList} />
          <Route path="/movies/create" exact component={MovieInsert} />
          <Route path="/movies/update" exact component={MovieUpdate} />
        </Switch>        
      </Router>
    
  );
}

export default App;
