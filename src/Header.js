import React from 'react'


function Header() {
  return (
    <div className="header">
      <div className='logo'>
        <img src='https://cdn-icons-png.flaticon.com/512/2173/2173774.png' alt='logo' width='30px'/>
        <h5>UniLife</h5>
      </div>
     <div className='menu'>
        <img src='https://cdn-icons-png.flaticon.com/512/7245/7245139.png' alt='logo' width='30px'/>
        <span>Shortlist</span>
        <img src='https://cdn-icons-png.flaticon.com/512/6806/6806987.png' alt='logo' width='30px'/>
        <span>Contact Us</span>

     </div>
    </div>
  )
}

export default Header