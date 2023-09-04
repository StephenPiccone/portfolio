import {nanoid} from 'nanoid'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import { useState, useEffect } from 'react';

function Project(props){

    const techImgs = props.techImgs.map(img => {
        return <img key={nanoid()} src={img}/>
    })

    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=>{
        const timeout = setTimeout(() => setIsMounted(true), 1000)
        return () => clearTimeout(timeout);
    }, []);
        
    return(
        <TransitionGroup component={null}>
            {isMounted &&
                <CSSTransition classNames="fadein" timeout={2000}>
                    <div className="project">
                        <div className='container--img'>
                            <div className='github'><a href={props.github} target='_blank'>View on GitHub</a></div>
                            <img className='proj--img'src={props.projImg}/>
                        </div>
                        <div className='proj--desc'>
                            <h2>{props.title}</h2>
                            <p>{props.desc}</p> 
                            <div className='techImgs'>
                                {techImgs}
                            </div>
                            
                        </div>

                    </div>
                </CSSTransition>}
        </TransitionGroup>
        
        
    )
}

export default Project