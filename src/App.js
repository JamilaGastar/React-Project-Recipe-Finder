import React from 'react'
import RecipeContainer from "./RecipeContainer"
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './NavBar';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';

const App = (props) => {
    return (
      <div>
        <Router>

         <div>
          <NavBar/> 
          <Route exact path="/" component={RecipeContainer}/>
          <Route path="/breakfast" component={Breakfast} />
          <Route path="/lunch" component={Lunch}/>
          <Route path="/dinner" component={Dinner}/>
         </div>
        </Router>
        {/* <RecipeContainer/> */}
      </div>
    )
  }
  

export default App


  

