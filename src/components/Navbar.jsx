import { Link } from "react-router-dom";
import '../styles/Navbar.css'
import { useState } from "react";
import { slide as Menu } from 'react-burger-menu';

const Mainmenu =()=>{
  const burgerStyles = {
    bmMenuWrap: {
      top: '0px', 
    },
    bmMenu: {
      background: '#333',
      padding: '2.5em 1.5em 0',
      fontSize: '1.7rem',
    },
    bmBurgerBars: {
      background: '#fff',
    },
    bmItem: {
      display: 'block',
      color: 'beige',
      textDecoration: 'none',
      marginBottom: '2.3rem',
    },
  };
  return(
    <header className="header-wrapper">
      <Link to="/" className="logo-container">
        <img src="/code.png" alt="logo-img" className="logo-img"/>
        <div id="logo" className="logo">
          <h1>MY LOGO</h1>
        </div>
      </Link>

      <nav className="header-nav">
        <Link className="nav-item" to="/">หน้าแรก</Link>
        <Link className="nav-item" to="/myproject">โปรเจก</Link>
        <Link className="nav-item" to="/Contact">ติดต่อ</Link>
      </nav>

      <Menu right styles={burgerStyles} customCrossIcon={<img src="./close.png" className="bm-cross-menu" />}>
        <Link className="nav-item-mobile" to="/">หน้าแรก</Link>
        <Link className="nav-item-mobile" to="/myproject">โปรเจก</Link>
        <Link className="nav-item-mobile" to="/Contact">ติดต่อ</Link>
    </Menu>
    </header>
  )
}

export default Mainmenu