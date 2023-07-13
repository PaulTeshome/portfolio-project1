import React, { useEffect, useState } from 'react'
import './About.scss'
import AnimatedLetters from './AnimatedLetters'

function About() {
    const [letterClass,setLetterClass] = useState('text-animate')

    const abtTxt= Array.from("About Me")

    useEffect(() => {
        setTimeout(() => {
           setLetterClass('text-animate-hover')
         }, 3000)
       }, [])

  return (
    <div  className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters letterClass={letterClass} strArray={abtTxt} idx={15}/>
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

                </div>
            </div>
        </div>
    </div>
  )
}

export default About