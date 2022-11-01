import { useEffect, useState } from 'react';
import '../styles/work.css';
import campi from '../imgs/campi.jpg';
import ogs from '../imgs/ogs1.jpg'
import Aos from 'aos';
import "aos/dist/aos.css";
import {useRef} from 'react';



const Work = (props) => {
useEffect(() =>{
    Aos.init({duration: 1000});
}, []);

    const projects= useRef(null);
    return (
        <div className="allWork" ref={projects} id='work'>

            <div>
                <div data-aos="fade-left" className='titlejust'>
                    <div className='titleWork'>My projects</div>
                </div>
                <div data-aos="fade-up" className='fpjust'>
                    <div className='fProject'>
                        <div data-aos="fade-right" className='descFirst'>
                            <div className='campititle'>CAMPi</div>
                            campi is an online platform for booking camp programs,in this site you can
                            create an account , book camp programs ,pay online and send feedbacks
                            <div className='tekFirst'>Framework & technology </div>
                            react.js <br/>Express.js <br/> node.js <br/> MongoDB<br/>Figma(design)
                        </div>
                        <div data-aos="fade-left" className='captFirst'>
                            <img src={campi} id="campimg" />
                        </div>

                    </div>
                </div>


                
                <div data-aos="fade-up" className='spjust'>
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
                </div>
            </div>





        </div>

    )
};

export default Work;
