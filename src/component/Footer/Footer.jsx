import React ,{useEffect} from 'react'
import './footer.css'
import './footer.scss'
import video2 from '../../assets/201766 (1080p).mp4'
import { FiSend } from 'react-icons/fi'
import { MdTravelExplore } from 'react-icons/md'
import { FaTwitter } from 'react-icons/fa6'
import { IoLogoYoutube } from 'react-icons/io'
import { FaInstagram } from 'react-icons/fa'
import { FaTripadvisor } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
    },[])


  return (

    
   <section className='footer'>
    <div className="vdodiv">
      <video src={video2} loop autoPlay type="video/mp4"></video>
    </div>



    <div className="seccontent container">
      <div className="contactdiv flex">
        <div data-aos="fade-up"  className="text">
          <small>KEEP IN TOUGH</small>
          <h2>Travel With Us</h2>

        </div>
        <div className="inputdiv flex">
          <input data-aos="fade-up"  type="text" placeholder='Enter E-mail Address' />
          <button data-aos="fade-up"  className='btn flex' type='submit'> Send
          <FiSend className="icon" />
          </button>
        </div>

      </div>
      <div className="footercard flex">
        <div className="footerintro flex">
          <div className="logodiv">
            <a href="#" className='logo flex'> <MdTravelExplore  className="icon"/>DUMBLEDORE.</a>
          </div>

          <div data-aos="fade-up"  className="footerparagraph">Welcome to DUMBLEDORE Travel, where your journey begins! We are a full-service travel agency dedicated to crafting unforgettable travel experiences for our clients. Whether you're planning a relaxing beach getaway, an adventurous trek through the mountains, or a cultural exploration of a new city, our team of experienced travel experts is here to turn your dream vacation into a reality.
           </div>

           <div data-aos="fade-up"  className="footersocial flex">
           <FaTwitter className="icon" />
           <IoLogoYoutube className="icon"/>
           <FaInstagram className="icon"/>
           <FaTripadvisor className="icon" />
           </div>
        </div>
        <div className="footerlinks grid">
<div data-aos="fade-up" data-aos-duration="3000"  className="linkgroup">
  <span className="grouptitle">
    OUR AGENCY
  </span>
<li className="footerlist flex">
<FaChevronRight  className="icon"/>
Services
</li>
<li className="footerlist flex">
<FaChevronRight  className="icon"/>
Agency
</li>
<li className="footerlist flex">
<FaChevronRight  className="icon"/>
Tourism
</li>
<li className="footerlist flex">
<FaChevronRight  className="icon"/>
Insurance
</li>
<li className="footerlist flex">
<FaChevronRight  className="icon"/>
Payment
</li>
</div>
<div data-aos="fade-up" data-aos-duration="4000" className="linkgroup">
  <span className="grouptitle">
   PARTNERS
  </span>
<li className="footerlist flex">
<FaChevronRight  className="icon"/>
Booking.com
</li>
<li className="footerlist flex">
<FaChevronRight  className="icon"/>
Rentcard
</li>
<li className="footerlist flex">
<FaChevronRight  className="icon"/>
Hostelworld
</li>
<li className="footerlist flex">
<FaChevronRight  className="icon"/>
Trivago
</li>
<li className="footerlist flex">
<FaChevronRight  className="icon"/>
Tripadvisor
</li>
</div>
<div data-aos="fade-up" data-aos-duration="5000"   className="linkgroup">
  <span className="grouptitle">
    LAST MINUTE
  </span>
<li className="footerlist flex">
<FaChevronRight  className="icon"/>
Kandy
</li>
<li className="footerlist flex">
<FaChevronRight  className="icon"/>
Nuwara-Eliya
</li>
<li className="footerlist flex">
<FaChevronRight  className="icon"/>
Galle
</li>
<li className="footerlist flex">
<FaChevronRight  className="icon"/>
Matara
</li>
<li className="footerlist flex">
<FaChevronRight  className="icon"/>
Mirissa
</li>
</div>
        </div>
        <div className="footerdiv flex">
          <small>BEST TRAVEL WEBSITE THEME</small>
          <small>COPYRIGHT RESERVED -2024</small>

        </div>
      </div>
    </div>
   </section>

  )
}

export default Footer