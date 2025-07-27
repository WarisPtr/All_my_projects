// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import CountUp from 'react-countup';
import { TypeAnimation } from 'react-type-animation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import '../styles/bannerSlide.css'
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const BannerSlide =()=>{
    const [indexslide ,setIndexslide] = useState(0)
    const [hover ,setHover] = useState(false)
    

    return (
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => swiper}
        onSlideChange={(swiper) => setIndexslide(swiper.realIndex)}
        // autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
        <SwiperSlide className='slider-item-one'>
            <div className='item-column'>
                <p className='text-one'>Hello, I AM</p>
                <div className='name'>
                    {indexslide == 0 && (
                          <TypeAnimation
                            sequence={['Waris Petrod']}
                            wrapper="p"
                            className="name"
                            speed={30}
                            cursor={true}
                            repeat={0} // ไม่ต้องวนซ้ำ
                        />
                    )}
                </div>
                <p className='text-two'>I AM Frontend Developer</p>
                <p className='text-three'>From Bangkok, Thailand. I'm a Frontend and WordPress developer with a strong passion for clean and responsive web design. I specialize in HTML, CSS, JavaScript, React, and WordPress. In my free time, I enjoy working out. I'm always eager to explore and learn new Frontend technologies to improve my skills even further.</p>
                <button className='btn'><Link to="/Contact">Contact</Link></button>
            </div>
            <div className='item-column'>
                <img src='/me.png' className='z-10 relative'/>
                <div className='achievement-row '>
                    <div className='count-item flex justify-between'>
                        <div className='w-1/3'></div>
                        <p className='w-1/3'>
                            <span className='text-[1.8rem] num-banner1'>{indexslide == 0 && (<CountUp start={0} end={3} duration={2} delay={0} />)}+</span>
                            <span className='text-[.8rem] xl:text-[1rem] xl:leading-[1.2] text-[#48cf80] description-num'>Years of Experience</span>
                        </p>
                        <div className='w-1/3'></div>
                    </div>
                    <div className='count-item flex justify-between'>
                        <div className='w-1/3'></div>
                        <p className='w-1/3'>
                            <span className='text-[1.8rem] num-banner1'>{indexslide == 0 && (<CountUp start={0} end={30} duration={2} delay={0} />)}+</span>
                            <span className='text-[.8rem] xl:text-[1rem] xl:leading-[1.2] text-[#48cf80] description-num'>Frontend Projects</span>
                        </p>
                        <div className='w-1/3'></div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='slider-item-two'>
        <div className='item-column w-1/5 leftgrid'>
            <div className="review">
                <h1><span className={indexslide == 1 ? 'text-animation':null}>Frontend Developer</span></h1>
                <p className='detail-review'><span className={indexslide == 1 ? 'text-animation':null}>Building ideas with clean code.</span></p>
            </div>
            <div className="stats">
                <div className="s1">
                    <h1><span className={indexslide == 1 ? 'text-animation':null}>{indexslide == 1 && (<CountUp start={0} end={30} duration={2} delay={0} />)}+</span></h1>
                    <p><span className={indexslide == 1 ? 'text-animation':null}>Happy Client</span></p>
                </div>
                <div className="s2">
                    <h1><span className={indexslide == 1 ? 'text-animation':null}>{indexslide == 1 && (<CountUp start={0} end={35} duration={2} delay={0} />)}+</span></h1>
                    <p><span className={indexslide == 1 ? 'text-animation':null}>Projects Done</span></p>
                </div>
                <div className="s3">
                    <h1><span className={indexslide == 1 ? 'text-animation':null}>{indexslide == 1 && (<CountUp start={0} end={60} duration={2} delay={0} />)}+</span></h1>
                    <p><span className={indexslide == 1 ? 'text-animation':null}>Media Features</span></p>
                </div>
            </div>
        </div>

        <div className='item-column w-2/5 justify-items-center mid-grid pt-2 flex items-center justify-center'>
            <h1 className="base">FRONTEND<br/>DEVELOPER</h1>
            <img src='/me2.png' className='relative pic-profile'/>
            <h1 className="topper">FRONTEND<br/>DEVELOPER</h1>
        </div>

        <div className='item-column w-1/5 rightgrid'>
            <div className='para-two'>
                <p className='title-banner-two'>Forntend Developer.</p>
                <p className='description-banner-two'>Building ideas with clean code.</p>
            </div>
            <img src='/star.webp' 
                  className={`star ${hover ? "hovered" : ""}`}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
            />

            <p className="para"><span className={indexslide == 1 ? 'text-animation':null}>Hi, I'm a Front-End Developer with experience in HTML, JavaScript, and CSS. I enjoy building clean, user-friendly interfaces and constantly learning new technologies.</span></p>
            <div className="stats-mobile">
                <div className="s1">
                    <h1 className='leading-[1.1]'><span className={indexslide == 1 ? 'text-animation':null}>{indexslide == 1 && (<CountUp start={0} end={30} duration={2} delay={0} />)}+</span></h1>
                    <p className='para'><span className={indexslide == 1 ? 'text-animation':null}>Happy Client</span></p>
                </div>
                <div className="s2">
                    <h1 className='leading-[1.1]'><span className={indexslide == 1 ? 'text-animation':null}>{indexslide == 1 && (<CountUp start={0} end={35} duration={2} delay={0} />)}+</span></h1>
                    <p className='para'><span className={indexslide == 1 ? 'text-animation':null}>Projects Done</span></p>
                </div>
                <div className="s3">
                    <h1 className='leading-[1.1]'><span className={indexslide == 1 ? 'text-animation':null}>{indexslide == 1 && (<CountUp start={0} end={60} duration={2} delay={0} />)}+</span></h1>
                    <p className='para'><span className={indexslide == 1 ? 'text-animation':null}>Media Features</span></p>
                </div>
            </div>
        </div>
        </SwiperSlide>
        </Swiper>
    );
}

export default BannerSlide