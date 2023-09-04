import {CSSTransition, TransitionGroup} from 'react-transition-group'
import { useState, useEffect } from 'react';


function About(){
    const [isMounted, setIsMounted] = useState(false);

  useEffect(()=>{
    const timeout = setTimeout(() => setIsMounted(true), 1000)
    return () => clearTimeout(timeout);
  }, []);
  
    return(
        <TransitionGroup component={null}>
            {isMounted &&
                <CSSTransition classNames="fadein" timeout={2000}>
                    <section className="about" id='about'>

                        <div className="about--left">
                            <h2 className="about--title">About Me</h2>
                            <div className="about--desc">
                                <p className='about--desc-txt'>I am a recent graduate from York University's Honours Computer Science program looking to enter the workforce as a software engineer/developer.</p>
                                <p className='about--desc-txt' >After building my first computer in my early teens, I found a passion in technology and 
                                became fascinated with the endless possibilities achievable with computers. Since then, I have found a love for programming and 
                                problem solving using computers! I am constantly pushing myself to learn new technologies and languages to expand my skillset and feed 
                                my appetite for learning.</p>    
                                <p className='about--desc-txt'>I consider myself to be someone that is goal driven and committed to achieving results. Through my work 
                                experiences I have learned the value of teamwork, communication and supporting my peers to be successful. I have the ability to navigate 
                                complex obstacles and find creative solutions to overcome them.</p>

                            </div>
                        </div>




                        <div className='about--list'>
                            <span className='about--tech'>Some of the technologies I've worked with:</span>
                            <div className="list--block">
                                <ul className="tech--list">
                                    <li><span className="tech--list item">Python</span></li>
                                    <li><span className="tech--list item">Java</span></li>
                                    <li><span className="tech--list item">JavaScript</span></li>
                                    <li><span className="tech--list item">SQL</span></li>
                                    
                                </ul>
                                <ul className="tech--list">
                                    <li><span className="tech--list item">React</span></li>
                                    <li><span className="tech--list item">Node.js</span></li>
                                    <li><span className="tech--list item">Pandas</span></li>
                                    <li><span className="tech--list item">NumPy</span></li>
                                </ul>
                            </div>    
                        </div>       
                    </section>
                </CSSTransition>
            }
        </TransitionGroup>
        
        
    )
}

export default About