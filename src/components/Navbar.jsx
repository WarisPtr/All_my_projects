import { Link,useLocation  } from "react-router-dom";
import '../styles/Navbar.css'
import { useEffect, useState } from "react";
import { slide as Menu } from 'react-burger-menu';

const Mainmenu =()=>{
  const [isOpen,setIsOpen] = useState(false)
  const location = useLocation()
  const burgerStyles = {
    bmMenuWrap: {
      top: '0px', 
    },
    bmMenu: {
      background: '#333',
      padding: '2.5em 1.5em 0',
      fontSize: '18px',
    },
    bmBurgerBars: {
      background: '#fff',
    },
    bmItem: {
      display: 'block',
      color: 'beige',
      textDecoration: 'none',
      marginBottom: '20px',
    },
  };

  useEffect(()=>{
    setIsOpen(false)
  },[location])
  
  const handleStateChange =(state)=>{
    setIsOpen(state.isOpen)
  }

  
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

      <Menu right styles={burgerStyles} isOpen={isOpen} onStateChange={handleStateChange} customCrossIcon={<img src="./close.png" className="bm-cross-menu" />}>
        <Link onClick={()=>setIsOpen(false)} className="nav-item-mobile" to="/">หน้าแรก</Link>
        <Link onClick={()=>setIsOpen(false)} className="nav-item-mobile" to="/myproject">โปรเจก</Link>
        <Link onClick={()=>setIsOpen(false)} className="nav-item-mobile" to="/Contact">ติดต่อ</Link>
    </Menu>
    </header>
  )
}

export default Mainmenu