import React from 'react'
import './Sidebar.scss'
import LogoS from '../assets/images/logo-s.png'
import LogoSub from '../assets/images/logo_sub.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faHome,faUser } from '@fortawesome/free-solid-svg-icons'

function SideBar() {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo'/>
            <img src={LogoSub} className='sub-logo' alt='logo subtitle'/>
        </Link>

        <nav>
            <NavLink exact='true' activeclassname='active' className='home-link' to='/'>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='about-link' to='/'>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='contact-link' to='/'>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>

        <div>
            
        </div>
    </div>
  )
}

export default SideBar