import { useEffect, useState } from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import Layout from '../layout/mainlayout';
import Skills from "../pages/skills"
import Work from "../pages/work"
import git from "../imgs/github-icon.png";
import lin from "../imgs/linkedin-icon.png";
import mail from "../imgs/mail-icon.png";
import Nav from "../components/navbar"
import boy from "../imgs/boy.png"
import Contact from './contact';
import Experience from './experience';
import { useRef } from 'react';



const Home = (props) => {
  const skills = useRef(null);
  const projects = useRef(null);
  const experience = useRef(null);
  const contact = useRef(null);

  const ScrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <div >
      <Layout>
        <div className="all-home" id='home'>


          <div className='content'>



            <div className='parag'>
              <div className='homeparag'>Hi, i'm Mouadh | Web developer</div>
            </div>

            <div className='acc'>
              <a href="https://github.com/MouadhChniti" target="_blank" rel="noreferrer"><img src={git} id="git" /></a>
              <a href="https://www.linkedin.com/in/mouadh-chniti-75345b230/" target="_blank" rel="noreferrer"><img src={lin} id="lin" /></a>
              <a href="https://mail.google.com/mail/u/0/#inbox/FMfcgxwJXxpcRrTSLbvrGlBFnfMCpSnL?compose=GTvVlcSKjgGkrWWDBVVGTkfnGZGtLllQPbZSrjDkbtcMkvLxJSlnDhTqrCPsjHdTqNhfhSzHmNGbZ" target="_blank" rel="noreferrer"><img src={mail} id="mail" /></a>

            </div>
            <div className='desc'>
              <div className='homedesc'>
              i love building beautiful interfaces,web apps and everything in between</div>
            </div>
          </div>
          <img src={boy} id="astro" />
        </div>
        <Skills ref={skills} />
        <Work ref={projects} />
        <Experience />
        <Contact ref={contact} />

      </Layout>
    </div>


  )
};

export default Home;
