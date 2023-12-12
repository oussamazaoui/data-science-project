import './index.scss'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/zaoui.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
  faMagnifyingGlassChart
} from '@fortawesome/free-solid-svg-icons'
function Sidebar() {
  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={logo} alt='logo'></img>
      </Link>
      <nav>
        <NavLink
          activeclassname="active"
          className="predict-link"
          to="/prediction"
        >
          <FontAwesomeIcon icon={faMagnifyingGlassChart} color="#4d4d4e" />
        </NavLink>
        
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/oussama-zaoui-a31927281/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/oussamazaoui"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
