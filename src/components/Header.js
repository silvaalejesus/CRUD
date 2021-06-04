import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from './logo.png'


const Header = (props) => {
  

  return (
    <header className=''>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <li className="nav-item active mr-5">
          <Link to={'/'} className="nav-link text-white h3"><img className="imgLogo"src={Logo}/></Link>
        </li> 
        <div className="navbar-nav mr-auto">
          <li className="nav-item active ml-5">
            <Link to={'/'}className="nav-link text-white">Home</Link>
          </li>
          
          <li className="nav-item">
            <Link to={"/add"} className="nav-link text-white">
              Add
            </Link>
          </li>
          <div className="container">
            <form id="form" className=" form-inline mr-5">
              {props.children}
            </form>
          </div>
        </div>
      </nav>
      
      {/* <nav className="navbar navbar-expand-lg">
          <div className=" container collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              
              
              <li className="nav-item active ml-4">
                <Link to={'/'} className="nav-link text-muted " href="#container">Link</Link>
              </li>
           </ul>
           
           
          </div>
      </nav> */}
    </header>
  )
}

export default Header;