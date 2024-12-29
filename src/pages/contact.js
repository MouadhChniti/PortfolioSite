import { useEffect, useState } from 'react';
import '../styles/contact.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useRef } from 'react';
import emailjs from 'emailjs-com';



const Contact = (props) => {
    const contact = useRef(null);

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('service_49xh3dd', 'template_i6oc1sn', e.target, '9BQLykWiU2N8nXUDS')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    // };

    return (
        <div data-aos="fade-up" className='all-contact' ref={contact} id='contact'>
            <div className='form-align'>
                <div className='formm'>
                    <div className='contactTitle'> Contact </div>
                    <div className='inputD' data-aos="fade-right">
                        <input type="text" placeholder='mail' name='sendermail' />
                    </div>
                    <div className='inputD' data-aos="fade-right">
                        <input type="text" placeholder='subject' name='submail' />
                    </div>
                    <div className='inputD' data-aos="fade-right">
                        <textarea placeholder='message' name='message'></textarea>
                    </div>
                    <div data-aos="fade-right" className='btnAlign'>
                        <div data-aos="fade-right" className='btnAlign'>
                            <button
                                className='sendbtn'
                                onClick={() => {
                                    window.open('mailto:example@example.com?subject=Your Subject&body=Your email body text here.');
                                }}
                            >
                                send
                            </button>
                        </div>

                    </div>

                </div>
            </div>

        </div>


    )
};

export default Contact;
