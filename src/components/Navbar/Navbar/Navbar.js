import React from 'react';
import classes from './Navbar.module.css';
const Navbar = (props) => {
  return (
    <nav className={classes.Navbar}>
      <i className='fa fa-github fa-2x' aria-hidden='true'></i>
      <h4>GITHUB</h4>
      <span>{props.user}</span>
    </nav>
  );
};
export default Navbar;
