import React from 'react';
import {  Link } from "react-router-dom";

const Navbar= () =>{
  return (
  <div className='navbar'>
    <li style={{listStyle: "none"}}>
      <Link to="/">Home</Link>
    </li>
    <li style={{listStyle: "none"}}>
      <Link to="/breakfast">Breakfast</Link>
    </li>
    <li style={{listStyle: "none"}}>
      <Link to="/lunch">Lunch</Link>
    </li>
    <li style={{listStyle: "none"}}>
      <Link to="/dinner">Dinner</Link>
    </li>
  </div>
  );
}
export default Navbar;