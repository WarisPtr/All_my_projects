import { Link } from "react-router-dom";
import '../styles/Navbar.css'

const Menu =()=>{
  return(
    <header className="header-wrapper">
      <Link to="/" className="flex w-[30%] items-center">
        <img src="/code.png" alt="logo-img" className="logo-img"/>
        <div id="logo" className="logo">
          <h1>MY LOGO</h1>
        </div>
      </Link>
      <nav className="header-nav">
        <Link className="nav-item" to="/">หน้าแรก</Link>
        {/* <Link className="nav-item" to="/About">เกี่ยวกับเรา</Link> */}
        <Link className="nav-item" to="/myproject">โปรเจก</Link>
        <Link className="nav-item" to="/Contact">ติดต่อเรา</Link>
      </nav>
    </header>
  )
}

export default Menu