import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from "react-router-dom";
import logoRestaurant from '../../assets/img/logo-crediweb.png';

import BurguerButton from './BurgerButton';

function Navbar() {
    
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        //cuando esta true lo pasa a false y vice versa
        setClicked(!clicked)
    }
    return (
        <>
            <NavContainer>
                <Link to="/">
                    <img src={logoRestaurant} alt="Logo Restaurant" width="40" height="40" className="nav__logo" />
                </Link>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <ul className="menu">
                        <li>
                            <NavLink
                                to="/restaurant"
                                className={({ isActive }) => isActive ? "menu__link menu__link--active" : "menu__link"}
                            >
                                Restaurant
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) => isActive ? "menu__link menu__link--active" : "menu__link"}
                            >
                                Dashboard Reservas
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='burguer'>
                    <BurguerButton clicked={clicked} handleClick={handleClick} />
                </div>
                <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
            </NavContainer>
        </>
    )
}

export default Navbar

const NavContainer = styled.nav`
  
  padding: .4rem;
  background-color: #white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .6s ease;
    a{
      color: white;
      font-size: 1.5rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 1.5rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: red;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 100% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  `