import { useEffect, useState } from 'react';
import '../styles/experience.css';

import Aos from 'aos';
import "aos/dist/aos.css";
import { useRef } from 'react';
import "aos/dist/aos.css";
import sastec from '../imgs/sastec.png'
import branperLogo from '../imgs/branperLogo.png'




const Experience = (props) => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);


    const experience = useRef(null);

    return (
        <div className='all-exp' ref={experience} id='experience'>
            <div data-aos="fade-right" className='titleExp'>Experience</div>
            <div data-aos="fade-up" className='expFirst'>
                <div className='exp'>
                    <div className='imgTraine'> <img src={sastec} id="sastecImg" /></div>
                    <div data-aos="fade-left" className='descExp'>
                        <div className='titleFexp'>Internship</div>
                        <div className='expDetail'>Company Name : Xpermedia</div>
                        <div className='expDetail'>Task : creation of web application with MERN stack
                            for managing camping needs
                        </div>
                        <div className='expDetail'>Framework and Technology used : javascript , React.js , Node.js , Express.js , MongoDB , Figma.</div>
                        <div className='expDetail'>traineeship duration : 2 months.</div>


                    </div>
                </div>


            </div>
            <div  className='expFirst'>
                <div className='exp'>
                    <div className='imgTraine'> <img src={branperLogo} id="branperImg" /></div>
                    <div data-aos="fade-left" className='descExp'>
                        <div className='titleFexp'>Internship</div>
                        <div className='expDetail'>Startup Name : Branper</div>
                        <div className='expDetail'>Task : creation of web platform contains AI models , file management system, Dashboard for data visualization and dashboard for users and datasets management
                        </div>
                        <div className='expDetail'>Framework and Technology used : javascript , React.js , django , MongoDB .</div>
                        <div className='expDetail'>traineeship duration : 4 months.</div>



                    </div>
                </div>
            </div>


            <div  className='expFirst'>
                <div className='exp'>
                    <div className='imgTraine'> <img src={branperLogo} id="branperImg" /></div>
                    <div data-aos="fade-left" className='descExp'>
                        <div className='titleFexp'>Web Developer</div>
                        <div className='expDetail'>Startup Name: Branper</div>
                        <div className='expDetail'>Role: Web Development</div>
                        <div className='expDetail'>
                            Frameworks and Technologies Used: JavaScript, React.js, Next.js, Django, Express.js, MongoDB, Socket.IO, and more.
                        </div>
                        <div className='expDetail'>Duration: Since July 2022</div>



                    </div>
                </div>
            </div>

        </div>


    )
};

export default Experience;
