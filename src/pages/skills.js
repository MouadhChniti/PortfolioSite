import { useEffect, useState } from 'react';
import '../styles/skills.css';
import { Link } from 'react-router-dom';
import Layout from '../layout/mainlayout';
import boy from "../imgs/boy1.png"
import skillsimg from "../imgs/skills-img.png"
import SkillBar from "../components/skillbar"
import Aos from 'aos';
import "aos/dist/aos.css";
import {useRef} from 'react';




const Skills = (props) => {
    useEffect(() =>{
        Aos.init({duration: 1000});
    }, []);

    const skills= useRef(null);
    return (
        <div className='justalign'id='skills'>
            <div  className="all-skills" >

                <div data-aos="fade-right" className='title'>
                    <div className='titledes'>My Skills</div>
                </div>
                <div data-aos="fade-up" className='contentskills'>
                    <div data-aos="fade-right" className='imgLeft'>
                        <img src={skillsimg} id="imgL" />
                    </div>
                    <div data-aos="fade-left" className='paragskills'>
                        <div className='skillbars'>
                            <SkillBar text="javascript" />
                            <SkillBar text="Typescript" />
                            <SkillBar text="Express" />
                            <SkillBar text="React.js" />
                            <SkillBar text="Node.js" />
                            <SkillBar text="HTML" />
                            <SkillBar text="CSS" />
                            <SkillBar text="MongoDB" />
                            <SkillBar text="mySQL" />
                            <SkillBar text="Git" />
                            <SkillBar text="Github" />
                            <SkillBar text="Python" />
                            <SkillBar text="Java" />
                            <SkillBar text="C" />
                            <SkillBar text="C++" />
                            <SkillBar text="C#" />
                            <SkillBar text="unity" />
                            <SkillBar text="XML" />
                            <SkillBar text="Figma" />
                            <SkillBar text="Jira" />
                            <SkillBar text="Android studio" />
                        </div>
                        <br />
                        i am computer science student at the higher institute of sciences
                        applied and technology of Sousse (issatso) and
                        I'm a junior developer who has recently started my journey as a web developer.<br />
                        I'm a self-motivated learner with strong organisation, time management and communication skills.
                        I'm able to work independently and collaboratively in a team with a meticulous attention to detail
                        
                    </div>
                        
                </div>
                <div data-aos="fade-left" className='cvbtn'><button class="glow-on-hover" type="button">CV IS HERE!</button></div>
            </div>


        </div>


    )
};

export default Skills;
