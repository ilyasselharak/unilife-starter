import React from 'react'

function Footer() {
  return (
    <div>
        <div className='frt'>
          <div className='kep'>
            <h2>Keep in touch</h2><br></br>
            <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
            <br></br>
            <input type="email" placeholder="Your email" />
          </div>
          <div className='soc'>
            <h2>Let's Socialize</h2><br/>
            <ul>
                <li><img src='https://cdn-icons-png.flaticon.com/512/3670/3670271.png' width='25px'/> Facebook</li>
                <li><img src="https://cdn-icons-png.flaticon.com/512/25/25347.png" width="25px"/> Twiter</li>
                <li><img src="https://cdn-icons-png.flaticon.com/512/1400/1400829.png" width="25px"/> Instagram</li>
            </ul>
          </div>
        </div>
        <div className='sec'>
          <div>
            <a href='#'>About</a>
            <a href='#'>Term and Conditions</a>
            <a href='#'>Privacy & Cookie Policies</a>
          </div>
          <div>
            <span>2022 </span>
            <span>© UniLife</span>
          </div>
        </div>
    </div>
  )
}

export default Footer