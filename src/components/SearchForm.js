import React from 'react'
import {useState } from 'react';

function SearchForm({city}) {
    const getInitialState = () => {
        const value = "Select your option";
        return value;
      };
    const der = "/detail/"
    const [value, setValue] = useState(getInitialState);
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
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
           <option value="6">6</option>
           <option value="7">7</option>
           <option value="8">8</option>
           </select>
           <input type="submit" value="Find Homes"/>
        </form>
    </div>
  )
}

export default SearchForm