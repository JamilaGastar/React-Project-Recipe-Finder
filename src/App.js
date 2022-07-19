import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import RecipeContainer from './containers/RecipeContainer';



const App = (props) => {
    return (
      <div>
        <Navbar/> 
        <Router>         
          <Route exact path="/" component={RecipeContainer}/>
        </Router>
      </div>
    );
  };
  

export default App


  

