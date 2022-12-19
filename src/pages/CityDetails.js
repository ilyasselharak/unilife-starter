import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'



function CityDetails() {
  const {city}=useParams()
  const [Town,setTown]=useState()
  useEffect(() => {
    axios.get("https://unilife-server.herokuapp.com/properties")
    .then(res=>{
      setTown(res.data.data)
      
      
    })
    .catch(err=>{console.log(err)})
  }, [])
  
  return (
    <div>
      <div className='container'>
        <h1>Student accommodation</h1>
        <p>Whatever you're after, we can help you find the right student accommodation for you</p>
        <div>
        <form className='CityDetails'>
          <div className='formDetail'>
          <div>
          
            <h3>Bedroom</h3>
            <select>
              <option>1</option>
            </select>
          </div>
          <div>
          <h3>Bedroom</h3>
            <select>
              <option>1</option>
            </select>
          </div>
          <div>
          <h3>Bedroom</h3>
            <select>
              <option>1</option>
            </select>
          </div>
          <div>
          <h3>Bedroom</h3>
            <select>
              <option>1</option>
            </select>
          </div>
          </div>
        </form>
        </div>
    </div>
      <div>
        <h1>6 homes Leeds</h1>
      </div>
      
    </div>
  )
}

export default CityDetails