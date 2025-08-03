import '../styles/MyProject.css'
import SponsorMarquee from '../components/sponser'
import Project from '../components/projectCard'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';

const MyProject =()=>{

    return(
        <section className='about-section-page pb-10'>
            <section className="section-template" style={{overflow:'hidden'}}>          
            <div className="bg-[#12121c] block bg-space" style={{height: '1.3vw'}}></div>
                <div className="row pt-14 relative">
                    <div className="col text-left">
                        <p className='hello'>Hello<span className='text-[#48cf80] pl-1'>.</span></p>
                        <p className='my-name'>I'm Waris Petrod</p>
                        <p className='jobtype'>Frontend Developer</p>
                        <button className ="btn"><Link to="/Contact">Contact</Link></button>
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
            
            <h2 className="contact-title pt-16 pb-10">Project</h2>
        
            <Tabs>
                <TabList>
                    <Tab >React</Tab>
                    <Tab >Wordpress</Tab>
                </TabList>

                <TabPanel className='react-tab'>
                    <Project category="React" />
                </TabPanel>
                <TabPanel className='wordpress-tab'>
                    <Project category="Wordpress" />
                </TabPanel>
            </Tabs>

        </section>
    )
}

export default MyProject