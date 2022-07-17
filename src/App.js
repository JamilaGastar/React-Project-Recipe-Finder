import React from 'react'
import {
  BrowserRouter as Router,
  Route 
} from 'react-router-dom';
import Navbar from './components/Navbar';
import RecipeContainer from './containers/RecipeContainer';
// import BreakfastContainer from './containers/BreakfastContainer';
// import LunchContainer from './containers/LunchContainer';
// import DinnerContainer from './containers/DinnerContainer';


const App = (props) => {
    return (
        <Router>
         <div>
            <Navbar/> 
            {/* <Route exact path="/" component={RecipeContainer}/> */}
          {/* <Route exact path="/breakfast" component={BreakfastContainer} />
          // <Route exact path="/lunch" component={LunchContainer} />
          // <Route exact path="/dinner" component={DinnerContainer} /> */}
          <RecipeContainer/> 
          {/* <BreakFastContainer/> */}
          {/* <LunchContainer/> */}
          {/* <DinnerContainer/> */}
         </div>
        </Router>
    );
  };
  

export default App


  

