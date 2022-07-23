import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Navbar from './components/Navbar';
import RecipeContainer from './containers/RecipeContainer';
import BreakfastContainer from './containers/BreakfastContainer';
import LunchContainer from './containers/LunchContainer';
import DinnerContainer from './containers/DinnerContainer';



const App = (props) => {
    return (
      <Router>         
          <Navbar/> 
          <Routes>
            <Route exact path="/" element={<RecipeContainer />}/>
            <Route exact path="/breakfast" element={<BreakfastContainer/>} />
            <Route exact path="/lunch" element={<LunchContainer/>} />
            <Route exact path="/dinner" element={<DinnerContainer/>} />
          </Routes>
      </Router>
      
    );
  };
  

export default App


  

