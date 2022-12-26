import React from 'react'
import students from '../assets/students.png'
import '../styles/cityinfo.css'
function CityInfo({city}) {
  return (
    <div className='footer_info'>
    <div className='parag'>
        <h2>Being a student in {city}</h2>
        <p className='first-pa'>{city} is lively and multicultural city with a large student population. It is quite a compact city. so it is easy to get around and has a community feel. {city} is the perfect mix of city and life and has something to offer to anyone who calls it home.</p>
        <p>{city} is home to three universities. the University of {city}. {city} Trinity University and {city} Beckett University</p>
    </div>
    <div><img src={students} width="300px"/></div>
    </div>
  )
}

export default CityInfo