import React from 'react';
import {  Link } from "react-router-dom";

const Navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/breakfast">Breakfast</Link>
    </li>
    <li>
      <Link to="/lunch">Lunch</Link>
    </li>
    <li>
      <Link to="/dinner">Dinner</Link>
    </li>
  </div>
  );
}
export default Navbar;