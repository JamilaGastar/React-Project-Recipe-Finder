import React from 'react'
import {
  BrowserRouter as Router,
  Route 
} from 'react-router-dom';
import Navbar from './components/Navbar';
import RecipeContainer from './containers/RecipeContainer';
// import BreakFastContainer from './containers/BreakFastContainer';


const App = (props) => {
    return (
        <Router>
         <div>
            <Navbar/> 
            {/* <Route exact path="/" component={RecipeContainer}/> */}
          {/* <Route exact path="/breakfast" component={BreakFastContainer} /> */}
          <RecipeContainer/> 
          {/* <BreakFastContainer/> */}
         </div>
        </Router>
    );
  };
  

export default App


  

