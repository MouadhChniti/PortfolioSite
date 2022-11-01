import "../styles/navbar.css";
import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { useRef } from 'react';
import scrollToSection from '../pages/home'
import icon from '../imgs/icon1.png'
import logo from "../imgs/boy.png"



const Navbar = (props) => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
    return (

        <div className="all-nav">
         <ul className={click ? "nav-menu active" : "nav-menu"}>
            <div className="nav" >
               
                    <Link className="navContent" to="home" spy={true} smooth={true} offset={-100} duration={1000} onClick={closeMenu} >{"<"}HOME{"/>"}</Link>
                    <Link className="navContent" to="skills" spy={true} smooth={true} offset={-70} duration={1000} onClick={closeMenu} >Skills</Link>
                    <Link className="navContent" to="work" spy={true} smooth={true} offset={-70} duration={1000}onClick={closeMenu} >projects</Link>
                    <Link className="navContent" to="experience" spy={true} smooth={true} offset={-70} duration={1000} onClick={closeMenu} >Experience</Link>
                    <Link className="navContent" to="contact" spy={true} smooth={true} offset={-100} duration={1000} onClick={closeMenu} >Contact</Link>
                
            </div>
            </ul>
            <Link  to="home" spy={true} smooth={true} offset={-100} duration={1000} className="logoMob" ><img src={logo} id="logo" /></Link>
            <li className="iconMob"  onClick={handleClick}><img src={icon} id="icon" /></li>

        </div >



    )
};

export default Navbar;
