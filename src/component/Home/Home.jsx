import React ,{useEffect} from 'react'
import './home.css'
import './home.scss'
import video from '../../assets/boat-23838 (1080p).mp4'
import { HiFilter } from 'react-icons/hi'
import { FiFacebook } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa6'
import { FaTripadvisor } from 'react-icons/fa'
import { FaListUl } from 'react-icons/fa'
import { TbApps } from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

useEffect(()=>{
Aos.init({duration:2000})
},[])



  return (
  <section className='home'>
<div className="overlay"></div>
<video src={video} muted autoPlay loop  type="video/mp4"></video>
<div className="homecontent container">
  <div className="textdiv">
   
  <h1 data-aos="fade-up" className="hometitle">Search Holiday Resort</h1>
  
  </div>
<div data-aos="fade-up" className="carddiv grid">
  <div className="destinationinput">
    <label htmlFor="city">Search Your Destination:</label>
    <div className="input ">
      <input type="text" placeholder='Enter Your Destination Here..' />
      
    </div>
  </div>
  <div className="dateinput">
    <label htmlFor="date">Select Start Date:</label>
    <div className="input flex">
      <input type="date" placeholder='enter name here..' />
      
    </div>
  </div>
  <div className="dateinput">
    <label htmlFor="date">Select End Date:</label>
    <div className="input flex">
      <input type="date" placeholder='enter name here..' />
      
    </div>
  </div>
  <div className="priceinput">
   <div className="lable_total flex">
    <label htmlFor="price">MaxImum Price:</label>
    <h3 className="total">Rs.100000</h3>
   </div>
<div className="input flex">
  <input type="range" max="100000" min="5000" />
</div>
</div>
  <div className="searchoption flex">
  <HiFilter  className="icon"/>
 <span>More Filters</span>
  </div>
</div>
<div data-aos="fade-up" className="homefootericon flex">
  <div className="righticon">
  <FiFacebook  className="icon"/>
  <FaInstagram className="icon"/>
  <FaTripadvisor className="icon"/>

  </div>
  <div className="lefticon">
  <FaListUl className="icon"/>
  <TbApps className="icon"/>
  
  
  </div>
</div>
</div>

  </section>
  )
}

export default Home