import { useEffect, useState } from 'react';
import '../styles/contact.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import {useRef} from 'react';



const Contact = (props) => {
    const contact= useRef(null);

    return (
        <div data-aos="fade-up" className='all-contact' ref={contact} id='contact'>
            <div className='form-align'>
                <div className='form'>
                    <div className='contactTitle'> Contact </div>
                    <div className='inputD' data-aos="fade-right">
                        <input type="text" placeholder='mail' />
                    </div>
                    <div  className='inputD' data-aos="fade-right">
                        <input type="text" placeholder='subject' />
                    </div>
                    <div  className='inputD' data-aos="fade-right">
                        <textarea placeholder='message'></textarea>
                    </div>
                    <div data-aos="fade-right" className='btnAlign'>
                    <button className='sendbtn'>send</button>
                    </div>
                </div>
            </div>

        </div>


    )
};

export default Contact;
