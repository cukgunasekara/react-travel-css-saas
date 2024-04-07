import React ,{useEffect} from 'react'
import './main.css'
import './main.scss'
import { IoLocation } from 'react-icons/io5'
import { LuClipboardCheck } from 'react-icons/lu'
import img from '../../assets/kandy.jpg'
import img2 from '../../assets/hikkaduwa.jpg'
import img3 from '../../assets/nuwara.jpg'
import img4 from '../../assets/pinnawala.jpg'
import img5 from '../../assets/trancomalee.jpg'
import img6 from '../../assets/caption.jpg'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Data=[
  {
  id:1,
  imgSrc:img,
  desttitle:'Dalada Maligawa',
  location:'Kandy',
  grade:'Historical',
  fees:'Rs. 25000',
  discription:'The Temple of the Sacred Tooth Relic is a world-renowned place of worship, where the left Canine tooth of Gautama Buddha is enshrined. The temple which is venerated by thousands of local & foreign devotees and tourists daily was named as a world heritage by UNESCO in 1988.'
  },
  
  {
    id:2,
    imgSrc:img2,
    desttitle:'Hikkaduwa',
    location:'Hikkaduwa',
    grade:'cultural relax',
    fees:'Rs. 15000',
    discription: 'Hikkaduwa is a coastal town in south-west of Sri Lanka. It is a world famous beach holiday destination, well known for its scenic beaches , coral reef sanctuary, surfing and nightlife.   Hikkaduwa might be the most popular surf spot on the Sri Lankan south-west coast.'


    },
    {
      id:3,
      imgSrc:img3,
      desttitle:'Nuwara-Eliya',
      location:'Nuwara-Eliya',
      grade:'cultural relax',
      fees:'Rs 10000',
      discription:'Nuwara-eliya is a city in the hill country of the Central Province, Sri Lanka. Its name means "city on the plain (table land)" or "city of light". The city is the administrative capital of Nuwara Eliya District.'
      },
      {
        id:4,
        imgSrc:img4,
        desttitle:'Pinnawala',
        location:'Rambukkana',
        grade:'cultural relax',
        fees:'Rs 12000',
        discription:'Pinnawala is a captive breeding and conservation institute for wild Asian elephants located at Pinnawala village, 13 km (8.1 mi) northeast of Kegalle town in Sabaragamuwa Province of Sri Lanka. '
        },
        {
          id:5,
          imgSrc:img5,
          desttitle:'Konwswaram Temple',
          location:'Trincomalee',
          grade:'cultural relax',
          fees:'Rs 20000',
          discription:'Thirukonamalai Konesar Temple – The Temple of the Thousand Pillars and Dakshina-Then Kailasam (Southern / Ancient Kailash) is a classical-medieval Hindu temple complex in Trincomalee, a Hindu religious pilgrimage centre in Eastern Province, Sri Lanka. '
          },
          {
            id:6,
            imgSrc:img6,
            desttitle:'Sigiriya',
            location:'Sigiriya',
            grade:'cultural relax',
            fees:'Rs 10000',
            discription:'is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka.'
            },
            
          
        
  
  
  ]
const Main = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
    },[])



  return (
   <section className='main container section'>
<div className="sectitle">
  <h3 data-aos="fade-right" className="title">Most Visited Destinations</h3>
</div>

<div className="seccontent grid">
{
Data.map(({id, imgSrc,desttitle, location, grade, fees, discription})=>{
return(
  <div key={id} data-aos="fade-up" className="singledestination">
<div className="imgdiv">
  <img src={imgSrc} alt={desttitle} />
</div>
<div className="cardinfo">
  <h4 className="desttitle">{desttitle}</h4>
  <span className="continent flex">
  <IoLocation  className='icon'/>
  <span className="name">{location}</span>
  </span>

  <div className="fees flex">
    <div className="grade">
      <span >{grade}<small>+1</small></span>
    </div>
    <div className="price">
      <h5>{fees}</h5>
    </div>
  </div>
  <div className="desc">
    <p>{discription}</p>
  </div>
  <button className='btn flex'>
    Details <LuClipboardCheck  className="icon"/>
  </button>
</div>
  </div>
)
})
}

</div>
   </section>
  )
}

export default Main