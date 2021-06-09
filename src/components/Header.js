import React, { useState } from 'react';

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