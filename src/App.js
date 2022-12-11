import React from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import {useState, useEffect} from 'react'
import axios from 'axios'

  
function App() {
  const [cities,setCities] = useState([])
  useEffect(()=>{
    axios.get(`https://unilife-server.herokuapp.com/cities`)
.then(response=>{
  setCities(response.data.response)
})
.catch(err=>{console.log(err)})
  },[])
  return (
    <div className='App'>
       <Header />
       <HomePage city={cities}/>
       <Footer />
    </div>
  );
}

export default App;