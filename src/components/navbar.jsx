import react from 'react'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import { useState, useEffect} from 'react';

function Navbar(){
    const [isMounted, setIsMounted] = useState(false);
    useEffect(()=>{
        const timeout = setTimeout(() => setIsMounted(true), 200)
        return () => clearTimeout(timeout);
      }, []);
    
    const content = (
        <nav className='navbar'>
            <div className='socials'>
                <a href="https://github.com/StephenPiccone" target="_blank"><img src={github} alt="github" className='social--img githubimg'/></a>
                <a href="https://www.linkedin.com/in/stephen-piccone/" target="_blank"><img src={linkedin} alt="linkedin" className='social--img linkedin'/></a>
            </div>
            <div className='pagelinks'>
                <span className='pagelink--txt'><a href='#about'>About</a></span>
                <span className='pagelink--txt'><a href='#project'>Projects</a></span>
                <span className='pagelink--txt'><a href='#contact'>Contact</a></span>
                <span className='pagelink--txt'><a href='https://drive.google.com/file/d/1WozY8J2IouYn5TXNoUGJYzENUPG_0OBm/view?usp=sharing' target='_blank'>Resume</a></span>
            </div>
        </nav>
    
    )

    
    return(
        <CSSTransition in={isMounted} timeout={5000} appear={true} classNames="fadein">
            {content}
        </CSSTransition>
    )
}

export default Navbar