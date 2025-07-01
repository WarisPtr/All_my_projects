import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Menu from "./components/Navbar";
import MyProject from "./pages/MyProject";
import Contact from "./pages/Contact";
import NotFound from "./pages/404page";
import SingleProject from "./pages/SingleProjectPage";


const MainPage =()=>{
  return(
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/myproject" element={<MyProject/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/singleproject/:id" element={<SingleProject/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default MainPage