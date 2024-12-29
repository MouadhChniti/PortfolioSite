import { useEffect, useState } from 'react';
import '../styles/work.css';
import campi from '../imgs/campi.jpg';
import ogs from '../imgs/ogs1.jpg'; import Aos from 'aos';
import "aos/dist/aos.css";
import { useRef } from 'react';
import loginFutureLab from '../imgs/futureLabLogin.png';
import FinanceDash from '../imgs/FinancialDash.png';
import homeFutureLab from '../imgs/homeHome.png';
import socialDash from '../imgs/socialDash.jpg';
import futureLabFiles from '../imgs/files.png';
import financeForm from '../imgs/financeForm.png';
import socialForm from '../imgs/socialForm.png'
import campihome from '../imgs/campiHome.jpg';
import campi1 from '../imgs/campi1.jpg';
import campi2 from '../imgs/campi2.jpg';
import campi3 from '../imgs/campi3.jpg';
import campiAbout from '../imgs/campiAbout.jpg';
import campiProfile from '../imgs/campiProfile.jpg'
import campiBook from '../imgs/campiBook.jpg'


const Work = (props) => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const projects = useRef(null);
    return (
        <div className="allWork" ref={projects} id='work'>


            <div>
                <div data-aos="fade-left" className='titlejust'>
                    <div className='titleWork'>My projects</div>
                </div>

                <div data-aos="fade-up" className='spjust'>
                    <div className='sProject'>
                        <div data-aos="fade-right" className='descSecond'>
                            <div className='ogstitle'>FutureLab</div>
                            <div>
                                FutureLab is a web platform developed as part of my Bachelor's capstone project in collaboration with Omar Ben Ghadha at the startup Branper. The platform integrates two AI models: one for predicting stock price evolution and another specialized in forecasting the number of social media posts for a brand. In addition to these core features, FutureLab includes a file management system for user datasets, a user profile section, an interactive dashboard for data visualization and Admin Dashboard for users and datasets management. This project showcases my ability to combine AI innovation with practical web development to deliver a comprehensive solution.

                            </div>
                            <div className='tekSecond'>Framework & technology </div>

                            <div>
                                <div>React.js</div>
                                <div>Django</div>
                                <div>Google Colab</div>
                            </div>
                        </div>
                        <div data-aos="fade-left" className='multiImgsContainer'>

                            {/* <img src={loginFutureLab}  /> */}
                            <img src={homeFutureLab} />
                            <img src={FinanceDash} />
                            <img src={socialDash} />
                            <img src={futureLabFiles} />
                            <img src={financeForm} />
                            <img src={socialForm} />
                        </div>

                    </div>
                </div>


                <div data-aos="fade-up" className='fpjust'>
                    <div className='fProject'>
                        <div data-aos="fade-right" className='descFirst'>
                            <div className='campititle'>CAMPi</div>
                            <div>
                                campi is an online platform for booking camp programs,in this site you can
                                create an account , book camp programs ,pay online and send feedbacks
                            </div>

                            <div className='tekFirst'>Framework & technology </div>
                            react.js <br />Express.js <br /> node.js <br /> MongoDB<br />Figma(design)
                        </div>
                        <div data-aos="fade-left" className='multiImgsContainer'
                            style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={campihome}  />
                            
                            <img src={campiAbout}  />
                            <img src={campi3}  />
                            <img src={campi2}  />
                            <img src={campi1}  />
                            <img src={campiProfile}  />
                            {/* <img src={campiBook}  /> */}

                        </div>

                    </div>
                </div>

                <div data-aos="fade-up" className='fpjust'>
                    <div className='fProject'>
                        <div data-aos="fade-right" className='descFirst'>
                            <div className='campititle'>Save&Serve</div>
                            <div>
                                campi is an online platform for booking camp programs,in this site you can
                                create an account , book camp programs ,pay online and send feedbacks
                            </div>

                            <div className='tekFirst'>Framework & technology </div>
                            react.js <br />Express.js <br /> node.js <br /> MongoDB<br />Figma(design)
                        </div>
                        <div data-aos="fade-left" className='multiImgsContainer'
                            style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={campihome}  />
                            
                            <img src={campiAbout}  />
                            <img src={campi3}  />
                            <img src={campi2}  />
                            <img src={campi1}  />
                            <img src={campiProfile}  />
                            {/* <img src={campiBook}  /> */}

                        </div>

                    </div>
                </div>



                {/* <div data-aos="fade-up" className='spjust'>
                    <div className='sProject'>
                        <div data-aos="fade-right" className='descSecond'>
                            <div className='ogstitle'>OGS</div>
                            OGS is an e-commerce website his activity is selling classic football jerseys.
                            <br/> our client can create an account,sign in,choose some of our articles and in one click he purshase the order.
                            <br/>also in this site you can sell your classic jersys to us to recycle them and sell them again or you can send your classic jersey to 
                            fix'em and return it as NEW. 
                            <div className='tekSecond'>Framework & technology </div>
                            react.js <br/>Express.js <br/> node.js <br/> MongoDB<br/>Figma(design)
                        </div>
                        <div data-aos="fade-left" className='captSecond'>
                            <img src={ogs} id="ogsimg" />
                        </div>

                    </div>
                </div> */}



            </div>





        </div>

    )
};

export default Work;
