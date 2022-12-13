import React from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import {useState, useEffect} from 'react'
import axios from 'axios'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Seeallcities from './pages/Seeallcities';


  
function App() {
  const [cities,setCities] = useState([])
  const [Pro,setPro]=useState([])
  useEffect(()=>{
    axios.get(`https://unilife-server.herokuapp.com/properties`)
.then(response=>{
  setPro(response.data.data)
})
.catch(err=>{console.log(err)})
  },[])
  useEffect(()=>{
    axios.get(`https://unilife-server.herokuapp.com/cities`)
.then(response=>{
  setCities(response.data.response)
})
.catch(err=>{console.log(err)})
  },[])
  return (
    <BrowserRouter>
    <Header />
     <Routes>
       <Route path="/seeallcities" element={<Seeallcities pro={Pro}/>}/>
       <Route path='/' element={<HomePage pro={Pro} city={cities}/>}/>
     </Routes>
       
       <Footer />
    </BrowserRouter>
  );
}

export default App;