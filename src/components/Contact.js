import React, { useEffect, useState } from 'react'
import './Contact.scss'
import Loader from 'react-loaders'
import AnimatedLetters from './AnimatedLetters'

function Contact() {
  const [letterClass,setLetterClass] = useState('text-animate')

  const contactTitle= Array.from("Contact Me")

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
              <AnimatedLetters letterClass={letterClass} strArray={contactTitle} idx={15}/>
          </h1>
          <p>
            In adipisicing ex ut ut anim do occaecat ad veniam magna culpa. Dolore ex nulla nulla laboris.
             Nisi pariatur tempor laboris ea consectetur cupidatat ea magna ullamco id dolore tempor. 
             Magna velit magna eiusmod labore. Duis dolor ipsum deserunt ex sint et voluptate sit cupidatat duis ea laboris occaecat do.
             Exercitation eiusmod duis duis proident elit ullamco proident Lorem nulla enim non reprehenderit non eiusmod.
          </p>
          <div className='contact-form'>
            <form>
            <ul>
              <li>Name</li>
              <li>Email</li>
              <li>Phone</li>
              <li>Fax</li>
              <li>contact</li>
            </ul>
            </form>
          </div>
      </div>
    </div>
   <Loader type='pacman'/>
   </>
    
  )
}

export default Contact