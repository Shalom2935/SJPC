import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './Header.scss';
import '../Buttons/buttonSmall';
import ButtonSmall from '../Buttons/buttonSmall';

const StyledLink = styled(Link)`

  &:visited {
    color:rgba(246,243,243);
    opacity:0;
  }
  &:active {
    color:black;
  }


 `;
function Header() {
  return(
    <div className='header'>
        <div className='logo'>Logo</div>
        <div className='navbar'>
            <ul className='navbar-items'>
                <li>ACCUEIL</li>
                <li><StyledLink to='/Contact'>CONTACT</StyledLink></li>
                <li><Link to='/Inscription'><ButtonSmall /></Link></li>
            </ul>
        </div>
    </div>
  );
}

export default Header;