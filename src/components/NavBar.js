import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { FaBrain } from 'react-icons/fa';
import {FaBars ,FaTimes} from 'react-icons/fa';

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

    window.addEventListener('resize', showButton);
    return (
        <>
         <div className="navbar">
            <div className="navbar-container container">
              <Link to='/' className="navbar-logo" >
              <FaBrain className="navbar-icon"></FaBrain>
                  Turing
              </Link>
              <div className="menu-icon" onClick={handleClick}>
                {!click ? <FaBars/>:<FaTimes/>}
              </div> 
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li classNAme="nav-item">
                  <Link to='/' className="nav-links" onClick={closeMobileMenu}>Home</Link>
                </li>
                <li classNAme="nav-item">
                  <Link to='/Services' className="nav-links" onClick={closeMobileMenu}>Services</Link>
                </li>
                <li classNAme="nav-item">
                  <Link to='/Products' className="nav-links" onClick={closeMobileMenu}>Products</Link>
                </li>
                <li className="nav-item">
                  { button ? (
                  <Link to='/SignUp' classname="nav-link" onClick={closeMobileMenu}>
                    <Button buttonStyle='btn--outline' buttonColor='black'>
                    SIGN UP
                    </Button>
                  </Link>) : 
                  (
                  <Link to='/SignUp' className="nav-link" onClick={closeMobileMenu}>
                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile'> 
                    SIGN UP
                    </Button>
                  </Link>)
                  }
                </li>
              </ul>
            </div>    
         </div>  
        </>
    );
};

export default NavBar;