import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
function ViewHome() {
    const {idhome} = useParams()
    const [Home,setHome]=useState()
    useEffect(() => {
        axios.get("https://unilife-server.herokuapp.com/properties")
        .then(res=>{
          setHome(res.data.data)
          
          
        })
        .catch(err=>{console.log(err)})
      }, [])
      let filter = Home?.filter(item=>item?._id===idhome)
      const div=(c,y)=>{
        return (<div className='flex roomItem'>
            <div>bedroom {c}</div>
            <div>{y}$</div>
        </div>)
      }
  return (
    <div>
        <h4>bach to search</h4>
        <div>
        {
         filter?.map(item=>{
          return (
            <div>
           <div className='HomeInfo'>
            <div className='slideR'>
                <div>
                    <img width="200px" src={item.images[0]}/>
                </div>
                <div>
                  <img width="100px" src={item.images[1]}/>
                  <img width="100px" src={item.images[2]}/>
                  <img width="100px" src={item.images[3]}/>
                </div>
            </div>
            <div className='slideL'>
                <div className='border'>
               <div className='addressDiv'>
                <span><address>{item.address.street}, {item.address.city}, {item.address.postcode}</address></span>
               </div>
               <div className='dtls'>
                <div>
                    <h6>Bedrooms</h6>
                    <img src="https://cdn-icons-png.flaticon.com/512/2283/2283945.png" width="20px"/>{item.bedroom_count}
                </div>
                <div>
                    <h6>Bathrooms</h6>
                    <img src="https://cdn-icons-png.flaticon.com/512/3130/3130313.png" width="20px"/>{item.bathroom_count}
                </div>
                <div>
                    <h6>Property Type</h6>{item.property_type}
                </div>
                <div>
                    <h6>Price</h6>{item.rent}
                </div>
                <div>
                    <h6>Furnished type</h6>{item.furnished}
                </div>
                <div>
                    <h6>Available Form</h6>{item.availability}
                </div>
               </div>
               </div>
               <div>
                <div>Short list</div>
                <div>book now</div>
               </div>
            </div>
           </div>
           <div className='flex'>
            <div className='slideR'>
                <h3>Desciption</h3>
                <p>{item.property_description}</p>
            </div>
            <div className='slideL'>
                <h3>Bedroom Prices</h3>
                <div>
                <div className='flex roomItem'>
                        <div>bedroom 1</div>
                        <div>{item.bedroom_prices.bedroom_one}$</div>
                    </div>
                    <div className='flex roomItem'>
                        <div>bedroom 2</div>
                        <div>{item.bedroom_prices.bedroom_two}$</div>
                    </div>
                    {item.bedroom_count>=3?div(3,item.bedroom_prices.bedroom_three):""}
                    {item.bedroom_count>=4?div(4,item.bedroom_prices.bedroom_four):""}
                    {item.bedroom_count>=5?div(5,item.bedroom_prices.bedroom_five):""}
                    {item.bedroom_count>=6?div(6,item.bedroom_prices.bedroom_six):""}
                    {item.bedroom_count>=7?div(7,item.bedroom_prices.bedroom_seven):""}
                    
                </div>
            </div>
           </div>
           <div>
            <h3>Key Futures</h3>
            {(item.key_features)?.map(i=>{
              return <p>{i}</p>
            })}
           </div>
           </div>
          )
         })
       }
       </div>
    </div>
  )
}

export default ViewHome