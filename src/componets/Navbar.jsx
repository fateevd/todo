import React from 'react';
import '../styles/App.css';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className='nav'>
      <Link to = '/Todo' className='nav__link'>
        Todo list
      </Link>
      <Link to='/Info' className='nav__link'>
        Информация
      </Link>
    </div>
  );
};

export default Navbar;
