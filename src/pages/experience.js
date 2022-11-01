import { useEffect, useState } from 'react';
import '../styles/experience.css';

import Aos from 'aos';
import "aos/dist/aos.css";
import { useRef } from 'react';
import "aos/dist/aos.css";
import sastec from '../imgs/sastec.png'





const Experience = (props) => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);


    const experience = useRef(null);

    return (
        <div className='all-exp' ref={experience} id='experience'>
             <div data-aos="fade-right" className='titleExp'>Traineeship</div>
             <div data-aos="fade-up"  className='expFirst'>
            <div className='exp'>
                <div className='imgTraine'> <img src={sastec} id="sastecImg" /></div>
                <div data-aos="fade-left" className='descExp'>
                    <div className='titleFexp'>summer traineeship</div>
                    <div className='expDetail'>Company Name : Xpermedia</div>
                    <div className='expDetail'>Task : creation of web application (front-end and back-end) with MERN stack 
                        for managing camping needs
                    </div>
                    <div className='expDetail'>Framework and Technology used : javascript , React.js , Node.js , Express.js , MongoDB , Figma.</div>
                    <div className='expDetail'>traineeship duration : from 18/06/2022 to 30/07/2022</div>
                    <div className='expDetail'>responsible : Amine BEJI</div>
                    <div className='expDetail'>responsible fuction : Full stack developer</div>
                    

                </div>
            </div>
            </div>


        </div>


    )
};

export default Experience;
