import BannerSlide from "../components/bannerSlide"
import Contact from "../components/Contact"
import Project from "../components/projectCard"

const Home =()=>{
    return(
        <div>
            <div className="bg-[#12121c] block " style={{height:'1.3vw'}}></div>
            <BannerSlide />
            <Project />
            <Contact />
        </div>
    )
}

export default Home