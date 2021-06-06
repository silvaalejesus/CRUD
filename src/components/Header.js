import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.png'


const Header = (props) => {
  return (
    <header className=''>
      <nav className="navbar navbar-expand navbar-dark bg-white">
        {props.children}     
      </nav>
    </header>
  )
}

export default Header;