import React from 'react'

function Seeallcities({pro}) {
  const der="/detail/"
  return (
    <div>
    <div className='container'>
        <h1>Student accommodation</h1>
        <p>UniLife have student accommodation available across the UK.</p>
        <p>Whatever you're after. we can help you find the right student accommodation for you</p>
    </div>
    <div className='allcities'>
        <center><h2>Search by City</h2></center>
        <div className='cities'>
       {
         pro.map(item=>{
            return <div><a href={der+item.name}><button>{item.name}</button></a></div>
         })
       }
       </div>
    </div>
    </div>
  )
}

export default Seeallcities