import '../styles/MyProject.css'
import SponsorMarquee from '../components/sponser'
import Project from '../components/projectCard'

const MyProject =()=>{
    return(
        <section className='about-section-page'>
            <section className="section-template">
            <div className="bg-[#12121c] block " style={{height: '1.3vw'}}></div>
                <div className="row pt-14 relative">
                    <div className="col text-left">
                        <p className='hello'>Hello<span className='text-[#48cf80] pl-1'>.</span></p>
                        <p className='my-name'>I'm Waris Petrod</p>
                        <p className='jobtype'>Frontend Developer</p>
                        <button className ="btn">Contact</button>
                    </div>
                    <div className="col flex justify-center">
                        <img src="/me3.png" className='z-10 relative' />
                        <p className='left'> &lt; </p>
                        <p className='right'> /&gt; </p>
                        <div className='overlay'></div>
                    </div>
                </div>
            </section>
            <section className='sponser'>
                <SponsorMarquee/>
            </section>
            <Project />

        </section>
    )
}

export default MyProject