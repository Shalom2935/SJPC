import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavMenu.scss';
import styled from 'styled-components';
import Button from '../Buttons/button';
const StyledLink = styled(NavLink)`

  &:visited {
    color:unset;
  }
  &:active {
    color:$Darkest;
  }
  &:hover{
    
  }

 `;
function NavMenu() {
  return (
    <div className='navbar'>
    <ul className='navbar-list'>
        <li className='navbar-list--item'><StyledLink to='/' className = {({isActive}) => [isActive ? '.active' : '']}>ACCUEIL</StyledLink></li>
        <li className='navbar-list--item'><StyledLink to='/Contact'>CONTACT</StyledLink></li>
        <li className='navbar-list--item'><NavLink to='/Inscription' ><Button text = {'REJOINDRE'} /></NavLink></li>
    </ul>
</div>
  )
}

export default NavMenu