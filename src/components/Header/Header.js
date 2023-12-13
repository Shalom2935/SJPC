import React from 'react';
import './Header.scss';
import NavMenu from '../NavLink/NavMenu';


function Header() {
  return(
    <div className='header'>
        <div className='logo'>Logo</div>
        <NavMenu />
    </div>
  );
}

export default Header;