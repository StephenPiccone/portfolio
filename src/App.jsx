import './App.css'
import './transitions.css'
import Navbar from './components/navbar'
import Namecard from './components/Namecard'
import About from './components/About'
import Project from './components/Project'
import data from './projData.js'
import Footer from './components/Footer'
import Contact from './components/Contact'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import { useState, useEffect } from 'react';


function App() {
  const projects = data.map(proj => {
    return <Project 
    key={proj.id}
    {...proj}
    />
})
const [isMounted, setIsMounted] = useState(false);

  useEffect(()=>{
    const timeout = setTimeout(() => setIsMounted(true), 1000)
    return () => clearTimeout(timeout);
  }, []);
 
  
  return (
    <div>
      <Navbar />
      <Namecard />
      <div className='content'>
        <div className='content--about'><About /></div>
        <div className='content--projects'>
          <TransitionGroup component={null}>
                  {isMounted &&
                      <CSSTransition classNames="fadein" timeout={2000}>
                          <h2 className='projects--title' id='project'>Projects</h2>
                      </CSSTransition>
                  }
              </TransitionGroup>
          
          <section>{projects}</section>
        </div>
        <Contact />
        <Footer />
        
      </div>
      
    </div>
   
    
  )
}

export default App

