import {CSSTransition, TransitionGroup} from 'react-transition-group'
import { useState, useEffect } from 'react';

function Contact(){
    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=>{
        const timeout = setTimeout(() => setIsMounted(true), 1000)
        return () => clearTimeout(timeout);
    }, []);

    return(
        <TransitionGroup>
            {isMounted &&
                <CSSTransition classNames="fadein" timeout={2000}>
                    <div className="contact" id="contact">
                        <span className="contact--purple title">Get In Touch</span>
                        <span className="contact--grey">Feel free to get in touch and send me an email!</span>
                        <span className="contact--grey">Email: <span className="contact--purple">Piccone88@gmail.com</span></span>
                    </div>
                </CSSTransition>
            }
        </TransitionGroup>
        
    )
}

export default Contact