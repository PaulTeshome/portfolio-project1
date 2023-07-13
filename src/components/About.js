import React, { useEffect, useState } from 'react'
import './About.scss'
import AnimatedLetters from './AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

function About() {
    const [letterClass,setLetterClass] = useState('text-animate')

    const abtTitle= Array.from("About Me")

    useEffect(() => {
        setTimeout(() => {
           setLetterClass('text-animate-hover')
         }, 3000)
       }, [])

  return (
    <>
     <div  className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters letterClass={letterClass} strArray={abtTitle} idx={15}/>
            </h1>
            <p>Nisi ipsum ut eu ad tempor quis. Cupidatat laboris sit consectetur laboris. Dolore ipsum mollit et amet non ad non non consectetur incididunt reprehenderit nisi. Anim laboris pariatur qui ut anim mollit veniam ad commodo Lorem ullamco eu sit.
            Nisi in ad mollit nostrud.</p>
            <p>Nisi ipsum ut eu ad tempor quis. Cupidatat laboris sit consectetur laboris. Dolore ipsum mollit et amet non ad non non consectetur incididunt reprehenderit nisi. Anim laboris pariatur qui ut anim mollit veniam ad commodo Lorem ullamco eu sit.
            Nisi in ad mollit nostrud.</p>
            <p>Nisi ipsum ut eu ad tempor quis. Cupidatat laboris sit consectetur laboris. Dolore ipsum mollit et amet non ad non non consectetur incididunt reprehenderit nisi. Anim laboris pariatur qui ut anim mollit veniam ad commodo Lorem ullamco eu sit.
            Nisi in ad mollit nostrud.</p>
        </div>
        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faJsSquare} color="#efd81d"/>
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faGitAlt} color="#ec4d28"/>
                </div>
            </div>
        </div>
    </div>
    <Loader type="pacman"/>
    </>
   
  )
}

export default About