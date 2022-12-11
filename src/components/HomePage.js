import React from 'react'
import SearchForm from './SearchForm';
import section from '../assets/person.png'
function HomePage({city}) {
  
 
  return (
    <div className='home'>
    <div className='container'>
        <h1>Find student homes with bills included</h1>
        <span>A simple and faster way to search for student accommodation</span>
        <SearchForm city={city}/>
        
    </div>
    <div className='card-container'>
          <h3>Student accommodations in our top cities</h3>
          <div className='div'>
        {
          city.map((item)=>{ 
            return (
            <div  className="items" style={{
              background: "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.6)), url(" + item.image_url + ")",
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize:'cover'
  
              }}>
              <p>{item.name}</p>
              <p>{item.property_count} properties</p>
            </div>)
          })
        }
        
        </div>
        
    </div>
    <button>See All Cities</button>
    <h2>Compare all inclusive student home.</h2>
    <div className='icon'>
     <div>
      <img src="https://cdn-icons-png.flaticon.com/512/258/258213.png" width='50px'/>
      <h4>Search</h4>
      <p>Find your dream home in the perfect area near you university</p>
     </div>
     <div>
      <img src="https://cdn-icons-png.flaticon.com/512/2327/2327509.png" width='50px'/>
      <h4>Compare</h4>
      <p>Compare student accommodation to find th right home for you</p>
     </div>
     <div>
     <img src="https://cdn-icons-png.flaticon.com/512/1611/1611154.png" width='50px'/>
      <h4>Bills included</h4>
      <p>Bills are included in all rent prices. no hidden fees.</p>
     </div>
    </div>
    <div className='section'>
     <div className='righ-sect'>
      <div className='sect'>
       <img src="https://cdn-icons-png.flaticon.com/512/6830/6830143.png" width='50px' height="50px"/>
       <div>
        <h3 className='title-sect'>Best selection</h3>
        <p>Best selevtion of student accommodations.</p>
        <p>Never been easier to find a home that's eight for you</p>
       </div>
      </div>
      <div className='sect'>
      <img src="https://cdn-icons-png.flaticon.com/512/263/263417.png" width='50px' height="50px"/>
       <div>
        <h3 className='title-sect'>Your favorite</h3>
        <p>Shortlist your favouriteproperties and send enquires in one click</p>
       </div>
      </div>
      <button>Search & Compare</button>
     </div>
     <div className='left-sect'>
      <img src={section}/>
     </div>
    </div>
    </div>
  )
}

export default HomePage