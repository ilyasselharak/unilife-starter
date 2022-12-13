import React from 'react'

function Seeallcities({pro}) {
  return (
    <div>
    <div className='container'>
        <h1>Student accommodation</h1>
        <p>UniLife have student accommodation available across the UK.</p>
        <p>Whatever you're after. we can help you find the right student accommodationfor you</p>
    </div>
    <div>
        <center><h2>Search by City</h2></center>
       {
         pro.map(item=>{
            return <div><p>{item.city_id.name}</p></div>
         })
       }
    </div>
    </div>
  )
}

export default Seeallcities