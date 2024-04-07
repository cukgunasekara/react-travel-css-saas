import React , {useState} from 'react'
import './navbar.css'

import { MdTravelExplore } from 'react-icons/md'
import { IoCloseCircleSharp } from 'react-icons/io5'
import { BsThreeDotsVertical } from 'react-icons/bs'

const Navbar = () => {
    const [active, setActive] = useState("nav__menu")
    const [icon, setIcon] = useState("nav__toggler")
    const navToggle = () => {
        if (active === "nav__menu") {
          setActive("nav__menu nav__active")
        } else setActive("nav__menu")
    
        // Icon Toggler
        if (icon === "nav__toggler") {
          setIcon("nav__toggler toggle")
        } else setIcon("nav__toggler")
      }
  return (
    <nav className="nav">
    <a href="#" className="nav__brand">
    <MdTravelExplore  className="icon"/>DUMBLEDORE.
    </a>
    <ul className={active}>
      <li className="nav__item">
        <a href="#" className="nav__link">
          Home
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link">
          About
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link">
          Packages
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link">
          Pages
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link">
            News
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link">
          Contact us
        </a>
      </li>
      <button className='btn'><a href="#">Book Now</a></button>
    </ul>
    <div onClick={navToggle} className={icon}>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>

  </nav>
  )
}

export default Navbar