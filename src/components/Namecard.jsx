import {CSSTransition, TransitionGroup} from 'react-transition-group'
import { useState, useEffect } from 'react';

function Namecard(){
    const [isMounted, setIsMounted] = useState(false);

  useEffect(()=>{
    const timeout = setTimeout(() => setIsMounted(true), 1000)
    return () => clearTimeout(timeout);
  }, []);

  const aboveName = <span className='name-txt'>Hello World, my name is</span>;
  const name = <h1 className='name'>Stephen Piccone.</h1>;
  const belowName = <span className='name-txt dark'>A computer science graduate eager to enter the workforce.</span>;

  const comps = [aboveName,name,belowName];
    return(
        <section className='namecard'>
            <div className='namecard--content'>
                <TransitionGroup component={null}>
                    {isMounted &&
                        comps.map((comp, i) => (
                        <CSSTransition key={i} classNames="fadein" timeout={2000}>
                            <div style={{ transitionDelay: `${i + 1}00ms` }}>{comp}</div>
                        </CSSTransition>
                        ))}
                </TransitionGroup>
            </div>
            
        </section>
    )
}

export default Namecard