import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CityInfo from '../components/CityInfo'
import "../styles/CityDetails.css"


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
  const der="/home/"
  let filter = Town?.filter(item=>item?.city_id.name===city)
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
              <option>Any Bedroom</option>
            </select>
          </div>
          <div>
          <h3>Bathroom</h3>
            <select>
              <option>Any Bathroom</option>
            </select>
          </div>
          <div>
          <h3>Max Price</h3>
            <select>
              <option>Any Price</option>
            </select>
          </div>
          <div>
          <h3>Home Type</h3>
            <select>
              <option>Any Type</option>
            </select>
          </div>
          </div>
        </form>
        </div>
    </div>
      <div className='tlt'>
        <h1>{filter?.length} homes {city}</h1>
      </div>
      <div className='city_rooms'>
      {
         filter?.map(item=>{
          return (
          <div className='city_item'>
            <img className='item_img' src={item?.images[0]}/>
            <div className='item'>
              <div className='divO'>
                <div>
                ${item.rent}
                <p>pppw including bills</p>
                </div>
                <div className='divOO'>
                <div className='divOOO'>
                  <img src="https://cdn-icons-png.flaticon.com/512/2283/2283945.png" width="20px"/>{item.bedroom_count}
                </div>
                <div className='divOOT'>
                <img src="https://cdn-icons-png.flaticon.com/512/3130/3130313.png" width="20px"/>{item.bathroom_count}
                
                </div>
              </div>
              </div>
              <div className='item_info'>
              <div className='divTh'>
                <p>Detached</p>
                {item.furnished}
              </div>
              <div className='divF'>
                <img src="https://cdn-icons-png.flaticon.com/512/4821/4821951.png" width="12px"/>
                {item.address.street}, {item.address.city}, {item.address.postcode}
              </div>
              </div>
              <a href={der+item._id}><div className='button'><img src='https://cdn-icons-png.flaticon.com/512/609/609803.png' width="20px"/>View Home</div></a>
            </div>
          </div>
          )
         })
       }
       </div>
       <CityInfo city={city}/>
    </div>
  )
}

export default CityDetails