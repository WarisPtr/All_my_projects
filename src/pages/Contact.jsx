import '../styles/contactPage.css'

const Contact =()=>{
    return(
        <section className='contact-section-page'>
            <div className="bg-[#12121c] block bg-space" style={{height: '1.3vw'}}></div>
            <div className="row-template py-14 sm:py-0">
                <div className='w-[76%] mx-auto pt-16'>
                    <p className='sm:text-[1.15rem] sm:pb-2 text-[6rem] pb-5 border-b border-[#575757]  text-[beige]'>Contact</p>
                </div>
                <div className="row py-14">
                    <div className="col sm:border-r sm:border-b-0 border-b w-full border-gray-600 sm:pr-[5%] pr-0 pb-14">
                        <p className='sm:text-[2.9rem] text-[5rem] leading-[1.2] font-medium text-[beige]'>
                            <span className='text-[#48cf80]'>I work efficiently </span> <br/>
                            and collaborate smoothly <br/>
                            with <span className='text-[#48cf80]'>   others.</span>
                        </p>
                    </div>
                    <div className="col sm:px-[5%] px-[0] w-full">
                        <div className="icon-row">
                            <div className="icon-box-img">
                                <img src='/โครงการใหม่-3-150x150.png'/>
                            </div>
                            <div className="icon-box-text">
                                <p>Address</p>
                                <p>8/597 แขวงหัวหมาก บางกะปิ กรุงเทพมหานคร 10240</p>
                            </div>
                        </div>
                        <div className="icon-row pt-7">
                            <div className="icon-box-img">
                                <img src='/โครงการใหม่-2-150x150.png'/>
                            </div>
                            <div className="icon-box-text ">
                                <p>Phone</p>
                                <p>+66 (0) 94 662 3792</p>
                            </div>
                        </div>
                        <div className="icon-row pt-7">
                            <div className="icon-box-img">
                                <img src='/โครงการใหม่-150x150.png'/>
                            </div>
                            <div className="icon-box-text">
                                <p>Email</p>
                                <p>hamwaris.ptr@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124009.42510139379!2d100.56664785836368!3d13.761103509466894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6191e8b76bad%3A0x518736a9019ad1d2!2z4Lie4Lil4Lix4Lih4LiE4Lit4LiZ4LmC4LiUIOC4o-C4suC4oeC4hOC4s-C5geC4q-C4hyA2MCDguK3guLTguJnguYDguJXguK3guKPguYzguYDguIrguJnguJXguYw!5e0!3m2!1sth!2sth!4v1749543526294!5m2!1sth!2sth" width="100%" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </section>
    )
}

export default Contact