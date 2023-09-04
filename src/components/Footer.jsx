import {CSSTransition, TransitionGroup} from 'react-transition-group'
import { useState, useEffect } from 'react';

function Footer(){
    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=>{
      const timeout = setTimeout(() => setIsMounted(true), 1000)
      return () => clearTimeout(timeout);
    }, []);
    
    
    return(
        <div className="footer">
            <TransitionGroup component={null}>
                {isMounted &&
                    <CSSTransition classNames="fadein" timeout={2000}>
                        <span>Designed in Figma and developed in Visual Studio code by Stephen Piccone. 
                        Built with Vite and Deployed using Netlify.</span>
                    </CSSTransition>
                }
            </TransitionGroup>
           
        </div>
    )
}

export default Footer