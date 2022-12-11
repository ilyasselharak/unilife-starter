import React from 'react'
import {useEffect, useState } from 'react';
import axios from 'axios';
function SearchForm({city}) {
    const getInitialState = () => {
        const value = "Select your option";
        return value;
      };
    useEffect(()=>{
        axios.get(`https://unilife-server.herokuapp.com/properties`)
    .then(response=>{
      setPro(response.data.data)
    })
    .catch(err=>{console.log(err)})
      },[])
    
    const [Pro,setPro]=useState([])
    const [value, setValue] = useState(getInitialState);
    let serched = Pro.filter(item=> item.city_id.name===value)
   
    const handleChange = (e) => {
        setValue(e.target.value);
      };
  return (
    <div>
        <form>
          <select className='city' value={value} onChange={handleChange}>
          <option disabled selected hidden>Select your option</option>
          {
             city.map((item)=>{
              
              return <option value={item.name}>{item.name}</option>
                
             })
          }
            </select>
           <select className='rooms'>
           <option disabled selected hidden>Any Bedroom</option>
           {
             serched.map((item)=>{
              
              return <option value={item.bedroom_count}>{item.bedroom_count}</option>
                
             })
            }
           </select>
           <input type="submit" value="Find Homes"/>
        </form>
    </div>
  )
}

export default SearchForm